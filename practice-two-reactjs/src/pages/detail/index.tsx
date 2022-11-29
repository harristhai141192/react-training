// Libraries
import { useState, useEffect, useMemo, FormEvent } from 'react';
import { Box, Text } from '@chakra-ui/react';

// Models
import { Member } from '@models/index';

// API
import { API } from '@constants/apis';

//Store
import { useMemberContext } from '@store/context';
import { ACTIONS } from '@store/action';
import { IInitialStateProps } from '@store/reducer';

// Components
import Card from '@components/Card';
import Button from '@components/Button';
import LoadingSpinner from '@components/LoadingSpinner';
import InputComponent from '@components/Input';
import ErrorBoundary from '@components/ErrorBoundary';
import ModalFormComponent from '@components/ModalFormComponent';
import ModalDeleteComponent from '@components/ModalDeleteComponent';
import MemberCardDetail from '@components/MemberCardDetail';

const Detail = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const [state, dispatch] = useMemberContext();
  const { members, loading }: IInitialStateProps = state;

  // GET ALL THE MEMBER
  useEffect(() => {
    dispatch({
      type: ACTIONS.MEMBER_REQUEST,
    });
    // DEFINE HELPERS, TRYCATCH
    const getAllMember = async () => {
      const response = await fetch(API.PATHS.URL_MEMBER);

      if (response.status == 200) {
        const members = await response.json();
        dispatch({ type: ACTIONS.MEMBER_REQUEST_SUCCESS, data: { members } });
        return;
      }
      dispatch({ type: ACTIONS.MEMBER_REQUEST_FAILURE, data: { error: response.error } });
    };

    getAllMember();
  }, []);

  // HANDLE MODALS CLICK
  const handleClickCard = (id: string) => {
    setIsOpenDetail(true);
    setCurrentId(id);
  };

  const handleCloseCard = () => {
    setIsOpenDetail(false);
    setCurrentId('');
  };

  const openEditForm = () => {
    setIsOpenAddForm(true);
  };

  const handleCloseForm = () => {
    setIsOpenAddForm(false);
  };

  const onOpenDeleteForm = () => {
    setIsOpenDeleteModal(true);
  };

  const handleCloseDeleteForm = () => {
    setIsOpenDeleteModal(false);
  };

  const openAddForm = () => {
    setIsOpenAddForm(true);
  };

  // HANDLE CLICK ADD BUTTON FORM
  const handleClickAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_MEMBER_REQUEST,
      loading: true,
    });

    const formItems = e.target as HTMLFormElement;

    // ADD MEMBER
    const addMember = async () => {
      const getMemberValue = {
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
        body: JSON.stringify(getMemberValue),
      });
      if (response.status == 201) {
        const member = await response.json();
        dispatch({ type: ACTIONS.ADD_MEMBER_SUCCESS, data: { member } });
        return;
      }
      dispatch({ type: ACTIONS.ADD_MEMBER_FAILURE, data: { error: response.error } });
    };

    // UPDATE MEMBER
    const updateMember = async () => {
      dispatch({
        type: ACTIONS.UPDATE_MEMBER_REQUEST,
      });

      const getMemberValue = {
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
        body: JSON.stringify(getMemberValue),
      });
      if (response.status == 200) {
        const member = await response.json();
        dispatch({ type: ACTIONS.UPDATE_MEMBER_SUCCESS, data: { member } });

        return;
      }
      dispatch({ type: ACTIONS.UPDATE_MEMBER_FAILURE, data: { error: response.error } });
    };

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
      type: ACTIONS.DELETE_MEMBER_REQUEST,
    });

    const deleteMember = async () => {
      const response = await fetch(`${API.PATHS.URL_MEMBER}/${currentId}`, {
        method: API.HTTP_METHODS.DELETE,
        headers: API.HEADERS,
      });
      if (response.status == 200) {
        const member = await response.json();

        dispatch({ type: ACTIONS.DELETE_MEMBER_SUCCESS, data: { member } });
        setIsOpenDeleteModal(false);
        setIsOpenDetail(false);
        setCurrentId('');
        return;
      }
      dispatch({ type: ACTIONS.DELETE_MEMBER_FAILURE, data: { error: response.error } });
    };
    deleteMember();
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTIONS.SEARCH_MEMBER_REQUEST });
    const inputText = e.target.value.toLowerCase();
    const searchMember = async () => {
      const response = await fetch(`${API.PATHS.URL_MEMBER}?memberName=${inputText}`);

      if (response.status == 200) {
        const members = await response.json();
        dispatch({ type: ACTIONS.SEARCH_MEMBER_SUCCESS, data: { members } });
        return;
      }
      dispatch({ type: ACTIONS.SEARCH_MEMBER_FAILURE, data: { error: response.error } });
    };
    searchMember();
  };

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
          {/* LOADING MEMBERS DETAIL CARD */}
          {!loading && members ? (
            members.map((item: Member) => (
              <Card
                card={item}
                key={generateKey(item.id)}
                height='150px'
                margin='1% 3%'
                onClick={() => handleClickCard(item.id)}
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
            isLoading={state.loading}
          />
          {isOpenDeleteModal && (
            <ModalDeleteComponent
              isOpenDeleteModal={isOpenDeleteModal}
              onClickDelete={handleOnClickDelete}
              onCloseDeleteModal={handleCloseDeleteForm}
              isLoading={state.loading}
            />
          )}
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Detail;
