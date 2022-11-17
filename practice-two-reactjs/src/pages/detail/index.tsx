// Libraries
import { Box, Text } from '@chakra-ui/react';
import { useState, useEffect, useCallback, useContext } from 'react';

// API
import { IMemberDetail } from '@models/index';
import { getMembers, updateMember, deleteMember, addMember } from '@apis/memberApi';

import { API } from '@constants/apis';

import useSWR from 'swr';
import { ContextState } from 'src/globals';
import useMemberContext from '../../globals/context';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';
import MemberCard from '@components/MemberCard';
import Card from '@components/Card';
import Button from '@components/Button';
import ModalComponent from '@components/Modal';
import FormComponent from '@components/Form';
import { FormEvent } from 'react';

const Detail = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [memberList, setMemberList] = useState<IMemberDetail[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const [member, setMember] = useState<IMemberDetail>();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isEditting, setIsEditting] = useState<boolean>(false);

  // SWR
  const { data } = useSWR(`${API.PATHS.URL_MEMBER}`, getMembers);

  console.log('DATA: ', data);
  // console.log('isLoading: ', isLoading);

  const [memberContext, dispatch] = useMemberContext();

  // Handle Click On Card
  const handleClickCard = async (id: string | undefined) => {
    setIsOpenDetail(true);
    const pullAMember = data?.find((item: IMemberDetail) => {
      return item.id == id;
    });

    setMember(pullAMember);
  };

  // Generate Key for key
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

  // Get all the member
  useEffect(() => {
    dispatch({
      type: 'GET_MEMBERS',
      payload: data,
    });
  }, [data]);

  // Handle turn on edit form and turn off detail form
  const openEditForm = () => {
    setIsEditting(true);
    setIsOpenDetail(false);
    setIsOpenAddForm(true);
  };

  // Handle turn off edit form and turn on add form
  const openAddForm = () => {
    setIsEditting(false);
    setIsOpenAddForm(true);
  };

  // Handle On Add
  const handleOnAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formItems = e.target as HTMLFormElement;

    await addMember({
      id: generateKey('Member'),
      memberName: (formItems[0] as HTMLInputElement).value,
      dateOfBirth: (formItems[1] as HTMLInputElement).value,
      memberImg: (formItems[2] as HTMLInputElement).value,
      phone: (formItems[3] as HTMLInputElement).value,
      memberSince: (formItems[4] as HTMLInputElement).value,
      email: (formItems[5] as HTMLInputElement).value,
      gender: (formItems[6] as HTMLInputElement).value,
      job: (formItems[7] as HTMLInputElement).value,
      description: (formItems[8] as HTMLInputElement).value,
    });
    setIsOpenAddForm(false);
    getMembers().then((data) => {
      dispatch({
        type: 'GET_MEMBERS',
        payload: data,
      });
    });
  };

  // Handle Click Edit Button
  const handleOnEdit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formItems = e.target as HTMLFormElement;

      await updateMember(member?.id, {
        memberName: (formItems[0] as HTMLInputElement).value,
        dateOfBirth: (formItems[1] as HTMLInputElement).value,
        memberImg: (formItems[2] as HTMLInputElement).value,
        phone: (formItems[3] as HTMLInputElement).value,
        memberSince: (formItems[4] as HTMLInputElement).value,
        email: (formItems[5] as HTMLInputElement).value,
        gender: (formItems[6] as HTMLInputElement).value,
        job: (formItems[7] as HTMLInputElement).value,
        description: (formItems[8] as HTMLInputElement).value,
      });
      setIsOpenAddForm(false);
    },
    [member],
  );

  // Handle Click Delete Button
  const handleOnDelete = useCallback(async () => {
    await deleteMember(member?.id);
    if (member?.id) {
      setIsOpenDeleteModal(false);
      setIsOpenDetail(false);
    }
  }, [member]);

  return (
    <>
      {/* HEADER SESSION */}
      <Header />
      <Box marginBottom='50px' marginLeft='30px' display='flex' alignItems='center'>
        <Text fontSize='4xl' as='b' fontFamily='PlayFairBold' marginRight='30px'>
          Member List
        </Text>
        <Button label='+ Add A Member' padding='10px 70px' onClick={openAddForm} />
      </Box>
      <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center'>
        {/* DETAIL */}
        {data &&
          data.map((item) => (
            <Card
              card={item}
              key={generateKey(item.id)}
              width='25%'
              height='150px'
              margin='1% 3%'
              onClick={() => handleClickCard(item?.id)}
            />
          ))}
        {isOpenDetail && (
          <MemberCard
            isOpen={isOpenDetail}
            onClose={() => setIsOpenDetail(false)}
            modalTitle='Member Detail'
            member={member}
          >
            <Button
              label='Edit'
              variant='outline'
              width='100%'
              marginRight='0'
              onClick={openEditForm}
            />
            <Button
              label='Delete'
              variant='solid'
              backgroundColor='crimson'
              width='100%'
              marginRight='0'
              onClick={() => setIsOpenDeleteModal(true)}
            />
          </MemberCard>
        )}
        {isOpenAddForm && (
          <ModalComponent
            isOpen={isOpenAddForm}
            onClose={() => setIsOpenAddForm(false)}
            modalTitle={isEditting ? 'Edit A Member' : 'Add A Member'}
          >
            <FormComponent
              formName=''
              onCancel={() => setIsOpenAddForm(false)}
              onSubmit={isEditting ? handleOnEdit : handleOnAdd}
              defaultMemberData={member}
            />
          </ModalComponent>
        )}
        {isOpenDeleteModal && (
          <ModalComponent
            isOpen={isOpenDeleteModal}
            onClose={() => setIsOpenDeleteModal(false)}
            modalTitle='Delete Member Board'
          >
            <Box display='flex' flexDirection='row'>
              <Text>Do you want to delete </Text>
              <Text color='crimson'> &nbsp;{member?.memberName} ?</Text>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='flex-end' margin='30px 0'>
              <Button label='Yes' backgroundColor='crimson' onClick={handleOnDelete} />
              <Button label='No' variant='outline' onClick={() => setIsOpenDeleteModal(false)} />
            </Box>
          </ModalComponent>
        )}
      </Box>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Detail;
