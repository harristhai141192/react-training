// Libraries
import { useState, useEffect, useMemo, FormEvent, useCallback } from 'react';
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
    console.log('MEMBER STATE: ', state.members);

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
    console.log('CLOSE CARD');
  };

  // HANDLE ON/OFF EDIT FORM
  // const openEditForm = () => {
  //   setIsEditting(true);
  //   setIsOpenDetail(false);
  //   setIsOpenAddForm(true);
  // };

  const openEditForm = (id: string) => {
    setIsOpenAddForm(true);
    console.log('currentid', currentId);
  };

  const handleCloseForm = () => {
    setIsOpenAddForm(false);
  };

  const onOpenDeleteForm = () => {
    console.log('DELETE FORM');

    setIsOpenDeleteModal(true);
  };

  const handleCloseDeleteForm = () => {
    console.log('CLOSE OPEN DELETE');

    setIsOpenDeleteModal(false);
  };

  // HANDLE ON OFF ADD FORM
  // const openAddForm = () => {
  //   setIsEditting(false);
  //   setIsOpenAddForm(true);
  // };

  const openAddForm = () => {
    console.log('CURRENT ID in add form', currentId);
    setIsOpenAddForm(true);
  };

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

  // HANDLE CLICK ADD BUTTON FORM
  const handleClickAdd = async (e: FormEvent<HTMLFormElement>) => {
    console.log('CURRENT ID IN ADD FORM: ', currentId);

    e.preventDefault();
    const formItems = e.target as HTMLFormElement;

    // ADD MEMBER
    const addMember = async () => {
      dispatch({
        type: ACTIONS.API_ADD_REQUEST,
      });
      const member = {
        memberName: (formItems[0] as HTMLInputElement).value,
        dateOfBirth: (formItems[1] as HTMLInputElement).value,
        memberImg: (formItems[2] as HTMLInputElement).value,
        phone: (formItems[3] as HTMLInputElement).value,
        memberSince: (formItems[4] as HTMLInputElement).value,
        email: (formItems[5] as HTMLInputElement).value,
        gender: (formItems[6] as HTMLInputElement).value,
        job: (formItems[7] as HTMLInputElement).value,
        description: (formItems[8] as HTMLInputElement).value,
      };
      const response = await fetch(API.PATHS.URL_MEMBER, {
        method: API.HTTP_METHODS.POST,
        headers: API.HEADERS,
        body: JSON.stringify(member),
      });
      if (response.status == 201) {
        const members = await response.json();

        dispatch({ type: ACTIONS.API_ADD_SUCCESS, data: { members } });
        return;
      }
      dispatch({ type: ACTIONS.API_ADD_FAILURE, data: { error: response.error } });
    };

    // UPDATE MEMBER
    const updateMember = async () => {
      dispatch({
        type: ACTIONS.API_UPDATE_REQUEST,
      });

      const member = {
        memberName: (formItems[0] as HTMLInputElement).value,
        dateOfBirth: (formItems[1] as HTMLInputElement).value,
        memberImg: (formItems[2] as HTMLInputElement).value,
        phone: (formItems[3] as HTMLInputElement).value,
        memberSince: (formItems[4] as HTMLInputElement).value,
        email: (formItems[5] as HTMLInputElement).value,
        gender: (formItems[6] as HTMLInputElement).value,
        job: (formItems[7] as HTMLInputElement).value,
        description: (formItems[8] as HTMLInputElement).value,
      };
      const response = await fetch(`${API.PATHS.URL_MEMBER}/${currentId}`, {
        method: API.HTTP_METHODS.PUT,
        headers: API.HEADERS,
        body: JSON.stringify(member),
      });
      if (response.status == 200) {
        const members = await response.json();

        dispatch({ type: ACTIONS.API_UPDATE_SUCCESS, data: { members } });
        return;
      }
      dispatch({ type: ACTIONS.API_UPDATE_FAILURE, data: { error: response.error } });
    };
    console.log('CURRENT ID OUTSIDE: ', currentId);

    if (currentId) {
      updateMember();
    } else {
      addMember();
    }
    setIsOpenAddForm(false);
  };

  // HANDLE CLICK DELETE
  const handleOnClickDelete = () => {
    setIsOpenDeleteModal(true);
    dispatch({
      type: ACTIONS.API_DELETE_REQUEST,
    });

    const deleteMember = async () => {
      const response = await fetch(`${API.PATHS.URL_MEMBER}/${currentId}`, {
        method: API.HTTP_METHODS.DELETE,
        headers: API.HEADERS,
      });
      if (response.status == 200) {
        const members = await response.json();

        dispatch({ type: ACTIONS.API_DELETE_SUCCESS, data: { members } });
        return;
      }
      dispatch({ type: ACTIONS.API_DELETE_FAILURE, data: { error: response.error } });
    };
    deleteMember();
  };

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
            onOpenDelete={onOpenDeleteForm}
          />
          <ModalFormComponent
            memberId={currentId}
            isOpen={isOpenAddForm}
            onClose={handleCloseForm}
            onSubmit={handleClickAdd}
          />
          {isOpenDeleteModal && (
            <ModalDeleteComponent
              isOpenDeleteModal={isOpenDeleteModal}
              onClickDelete={handleOnClickDelete}
              onCloseDeleteModal={handleCloseDeleteForm}
            />
          )}
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Detail;
