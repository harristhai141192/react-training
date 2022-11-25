// Libraries
import { useState, useEffect, useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';

// Models
import { Member } from '@models/index';

// API
import { API } from '@constants/apis';

//Store
import { useMemberContext } from '@store/context';
import { ACTIONS } from '@store/action';

// Components
import Card from '@components/Card';
import Button from '@components/Button';
import LoadingSpinner from '@components/LoadingSpinner';
import InputComponent from '@components/Input';
import ErrorBoundary from '@components/ErrorBoundary';
import ModalFormComponent from './ModalFormComponent';
import ModalDeleteComponent from './ModalDeleteComponent';
import MemberCardDetail from './MemberCardDetail';

const Detail = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const [state, dispatch] = useMemberContext();
  // NEED TO HANDLE SUCCESS AND ERROR MESSAGE TO SHOW TO UI for add,edit and delete

  // GET ALL THE MEMBER
  useEffect(() => {
    dispatch({
      type: ACTIONS.API_CALL_REQUEST,
    });
    // DEFINE HELPERS, TRYCATCH
    const getAllMember = async () => {
      const response = await fetch(API.PATHS.URL_MEMBER);

      if (response.status == 200) {
        const members = await response.json();
        dispatch({ type: ACTIONS.API_CALL_SUCCESS, data: { members } });
        return;
      }
      dispatch({ type: ACTIONS.API_CALL_FAILURE, data: { error: response.error } });
    };
    getAllMember();
  }, []);

  // HANDLE CLICK ON CARD TO SHOW MEMBER INFO
  const handleClickCard = (id: string) => {
    setIsOpenDetail(true);
    setCurrentId(id);
  };

  const handleCloseCard = () => {
    setIsOpenDetail(false);
    setCurrentId('');
  };

  // HANDLE ON/OFF EDIT FORM
  // const openEditForm = () => {
  //   setIsEditting(true);
  //   setIsOpenDetail(false);
  //   setIsOpenAddForm(true);
  // };

  const openEditForm = (id: string) => {
    setIsOpenAddForm(true);
    setCurrentId(id);
  };

  const handleCloseForm = () => {
    setIsOpenAddForm(false);
  };

  // HANDLE ON OFF ADD FORM
  // const openAddForm = () => {
  //   setIsEditting(false);
  //   setIsOpenAddForm(true);
  // };

  const openAddForm = () => {};

  // HANDLE ON CLICK ADD BUTTON
  // const handleClickAdd = useCallback(async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const formItems = e.target as HTMLFormElement;

  //   await addMember({
  //     id: generateKey('Member'),
  //     memberName: (formItems[0] as HTMLInputElement).value,
  //     dateOfBirth: (formItems[1] as HTMLInputElement).value,
  //     memberImg: (formItems[2] as HTMLInputElement).value,
  //     phone: (formItems[3] as HTMLInputElement).value,
  //     memberSince: (formItems[4] as HTMLInputElement).value,
  //     email: (formItems[5] as HTMLInputElement).value,
  //     gender: (formItems[6] as HTMLInputElement).value,
  //     job: (formItems[7] as HTMLInputElement).value,
  //     description: (formItems[8] as HTMLInputElement).value,
  //   });
  //   setIsOpenAddForm(false);
  //   getMembers().then((data) => {
  //     dispatch({
  //       type: ACTION_DISPATCH.ADD,
  //       payload: data,
  //     });
  //     setIsLoading(false);
  //   });
  // }, []);

  const handleClickAdd = () => {};

  // HANDLE ON CLICK EDIT BUTTON
  // const handleOnClickEdit = useCallback(
  //   async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsLoading(true);

  //     const formItems = e.target as HTMLFormElement;

  //     await updateMember(member?.id, {
  //       memberName: (formItems[0] as HTMLInputElement).value,
  //       dateOfBirth: (formItems[1] as HTMLInputElement).value,
  //       memberImg: (formItems[2] as HTMLInputElement).value,
  //       phone: (formItems[3] as HTMLInputElement).value,
  //       memberSince: (formItems[4] as HTMLInputElement).value,
  //       email: (formItems[5] as HTMLInputElement).value,
  //       gender: (formItems[6] as HTMLInputElement).value,
  //       job: (formItems[7] as HTMLInputElement).value,
  //       description: (formItems[8] as HTMLInputElement).value,
  //     });
  //     setIsOpenAddForm(false);
  //     getMembers().then((data) => {
  //       dispatch({
  //         type: ACTION_DISPATCH.EDIT,
  //         payload: data,
  //       });
  //       setIsLoading(false);
  //     });
  //   },
  //   [member],
  // );

  const handleOnClickEdit = () => {};

  // HANDLE ON CLICK DELETE BUTTON
  // const handleOnClickDelete = useCallback(async () => {
  //   setIsLoading(true);
  //   await deleteMember(member?.id);

  //   if (member?.id) {
  //     setIsOpenDeleteModal(false);
  //     setIsOpenDetail(false);
  //   }

  //   getMembers().then((data) => {
  //     dispatch({
  //       type: ACTION_DISPATCH.DELETE,
  //       payload: data,
  //     });

  //     setIsLoading(false);
  //   });
  // }, [member]);

  const handleOnClickDelete = () => {};

  // GET VALUE ON SEARCH
  // const handleOnSearch = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setInputText(e.target.value.toLowerCase());
  //   },
  //   [memberContext],
  // );

  const handleOnSearch = () => {};

  // GENERATE KEY
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

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
          {!state.loading && state.members ? (
            state.members.map((item: Member) => (
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

          {/* MODAL */}
          <MemberCardDetail
            memberId={currentId}
            isOpen={isOpenDetail}
            onClose={handleCloseCard}
            onOpenEdit={openEditForm}
          />
          <ModalFormComponent
            memberId={currentId}
            isOpen={isOpenAddForm}
            onClose={handleCloseForm}
          />
          {isOpenDeleteModal && <ModalDeleteComponent />}
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Detail;
