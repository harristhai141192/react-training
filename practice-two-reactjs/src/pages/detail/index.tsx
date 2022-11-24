// Libraries
import { FormEvent, useState, useEffect, useCallback, useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';

// Constants
import { ACTION_DISPATCH } from '@constants/action';

// API
import { Member } from '@models/index';
import { getMembers, updateMember, deleteMember, addMember } from '@apis/memberApi';
import { API } from '@constants/apis';

// SWR
import useSWR from 'swr';

//Context
import { useMemberContext } from '@globals/context';

// Components
import MemberCard from '@components/MemberCard';
import Card from '@components/Card';
import Button from '@components/Button';
import ModalComponent from '@components/Modal';
import FormComponent from '@components/Form';
import LoadingSpinner from '@components/LoadingSpinner';
import InputComponent from '@components/Input';
import ErrorBoundary from '@components/ErrorBoundary';

const Detail = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [member, setMember] = useState<Member>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [memberContext, dispatch] = useMemberContext();

  // GET DATA THRU SWR
  const { data } = useSWR(API.PATHS.URL_MEMBER, getMembers);

  // HANDLE CLICK ON CARD TO SHOW MEMBER INFOR
  const handleClickCard = useCallback(
    async (id: string | undefined) => {
      setIsOpenDetail(true);
      const pullAMember = memberContext.member.find((item: Member) => item.id === id);

      setMember(pullAMember);
    },
    [memberContext],
  );

  // GENERATE KEY
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

  // GET ALL THE MEMBER
  useEffect(() => {
    setIsLoading(false);
    if (data) {
      dispatch({
        type: ACTION_DISPATCH.ADD,
        payload: data,
      });
    }
  }, [data]);

  // HANDLE ON/OFF EDIT FORM
  const openEditForm = () => {
    setIsEditting(true);
    setIsOpenDetail(false);
    setIsOpenAddForm(true);
  };

  // HANDLE ON OFF ADD FORM
  const openAddForm = () => {
    setIsEditting(false);
    setIsOpenAddForm(true);
  };

  // HANDLE ON CLICK ADD BUTTON
  const handleClickAdd = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
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
        type: ACTION_DISPATCH.ADD,
        payload: data,
      });
      setIsLoading(false);
    });
  }, []);

  // HANDLE ON CLICK EDIT BUTTON
  const handleOnClickEdit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

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
      getMembers().then((data) => {
        dispatch({
          type: ACTION_DISPATCH.EDIT,
          payload: data,
        });
        setIsLoading(false);
      });
    },
    [member],
  );

  // HANDLE ON CLICK DELETE BUTTON
  const handleOnClickDelete = useCallback(async () => {
    setIsLoading(true);
    await deleteMember(member?.id);

    if (member?.id) {
      setIsOpenDeleteModal(false);
      setIsOpenDetail(false);
    }

    getMembers().then((data) => {
      dispatch({
        type: ACTION_DISPATCH.DELETE,
        payload: data,
      });

      setIsLoading(false);
    });
  }, [member]);

  // RENDER TITLE TO NOT BE RERENDERED
  const renderTitle = useMemo(() => {
    return (
      <Text
        fontSize={{ sm: '1xl', md: '3xl' }}
        as='b'
        fontFamily='PlayFairBold'
        marginRight='30px'
        w='50%'
      >
        Member List
      </Text>
    );
  }, []);

  // GET VALUE ON SEARCH
  const handleOnSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value.toLowerCase());
    },
    [memberContext],
  );

  // HANDLE SEARCH/FILTER
  const filteringData = memberContext.member?.filter((item: { memberName: string }) => {
    if (inputText === '') {
      return memberContext.member;
    } else if (item.memberName?.toLowerCase().includes(inputText.toLowerCase().trim())) {
      return item.memberName;
    }
  });

  return (
    <>
      <ErrorBoundary>
        <Box display='flex' marginLeft='30px' flexDirection='row' flexWrap='wrap'>
          <Box width='100%' display='flex' marginBottom='10px' alignItems='center'>
            {renderTitle}
            <Box display='flex' justifyContent='flex-end' width='100%' alignItems='center'>
              <Text fontSize={{ sm: 'text.small', md: 'text.small', lg: 'text.medium' }}>
                Searching:
              </Text>
              <InputComponent width='30%' margin='0px 15px' onChange={handleOnSearch} />
            </Box>
          </Box>
          <Button
            marginBottom='30px'
            label='+ Add A Member'
            padding='10px 70px'
            onClick={openAddForm}
          />
        </Box>

        <Box display='flex' flexDirection='row' flexWrap='wrap'>
          {/* DETAIL */}
          {!isLoading && filteringData ? (
            filteringData.map((item: Member) => (
              <Card
                card={item}
                key={generateKey(item.id)}
                height='150px'
                margin='1% 3%'
                onClick={() => handleClickCard(item?.id)}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
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
                marginRight='5px'
                onClick={openEditForm}
              />
              <Button
                label='Delete'
                variant='solid'
                backgroundColor='crimson'
                width='100%'
                marginRight='0'
                padding='0'
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
                onSubmit={isEditting ? handleOnClickEdit : handleClickAdd}
                defaultMemberData={isEditting ? member : {}}
                isLoading={isLoading}
              />
            </ModalComponent>
          )}
          {isOpenDeleteModal && (
            <ModalComponent
              isOpen={isOpenDeleteModal}
              onClose={() => setIsOpenDeleteModal(false)}
              modalTitle='Delete Member Board'
            >
              <Box display='flex' flexDirection='row' fontFamily='RalewayLight'>
                <Text>Do you want to delete </Text>
                <Text color='crimson'> &nbsp;{member?.memberName}</Text>
                <Text>?</Text>
              </Box>
              <Box display='flex' flexDirection='row' justifyContent='flex-end' margin='30px 0'>
                <Button
                  isLoading={isLoading}
                  loadingText='Submitting'
                  label='Yes'
                  backgroundColor='crimson'
                  onClick={handleOnClickDelete}
                />
                <Button
                  isLoading={isLoading}
                  label='No'
                  variant='outline'
                  onClick={() => setIsOpenDeleteModal(false)}
                />
              </Box>
            </ModalComponent>
          )}
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Detail;
