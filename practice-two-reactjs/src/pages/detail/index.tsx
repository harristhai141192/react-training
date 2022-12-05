// Libraries
import { useState, useEffect, useMemo, FormEvent } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

// Models
import { Member } from '@models/index';

//Utils
import {
  addMember,
  updateSpecificMember,
  deleteMember,
  getAllMember,
  searchMember,
  generateKey,
} from '@utils/mainFeaturesUtils';

//Store
import { useMemberContext } from '@store/context';
import { ACTIONS } from '@store/actions';
import { IInitialStateProps } from '@store/reducer';

// Components
import Card from '@components/Card';
import LoadingSpinner from '@components/LoadingSpinner';
import InputComponent from '@components/Input';
import ErrorBoundary from '@components/ErrorBoundary';
import ModalFormComponent from '@components/ModalFormComponent';
import ModalDeleteComponent from '@components/ModalDeleteComponent';
import MemberCardDetail from '@components/MemberCardDetail';
import { useDebounce } from '../../store/debounce';
import { useCallback } from '@storybook/addons';

const Detail = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const [state, dispatch] = useMemberContext();
  const { members, loading }: IInitialStateProps = state;
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);

  // GET ALL THE MEMBER
  useEffect(() => {
    getAllMember(dispatch);
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

  const handleOpenEditForm = () => {
    setIsOpenAddForm(true);
  };

  const handleCloseForm = () => {
    setIsOpenAddForm(false);
  };

  const handleOpenDeleteForm = () => {
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

    const formItems = e.target as HTMLFormElement;

    if (currentId) {
      updateSpecificMember(dispatch, currentId, formItems);
    } else {
      addMember(dispatch, formItems);
    }
    setIsOpenAddForm(false);
  };

  // HANDLE CLICK DELETE
  const handleOnClickDelete = () => {
    setIsOpenDeleteModal(true);

    const handleDeleteMember = () => {
      deleteMember(dispatch, currentId);
      setIsOpenDeleteModal(false);
      setIsOpenDetail(false);
      setCurrentId('');
    };
    handleDeleteMember();
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTIONS.SEARCH_MEMBER_REQUEST });
    setValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    searchMember(dispatch, value);
  }, [debouncedValue]);

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
          <Button marginBottom='30px' padding='10px 70px' onClick={openAddForm}>
            + Add a member
          </Button>
        </Box>

        <Box display='flex' flexDirection='row' flexWrap='wrap'>
          {/* LOADING MEMBERS DETAIL CARD */}
          {!loading && members ? (
            members.map((item: Member) => (
              <Card
                card={item}
                key={generateKey()}
                height={{ sm: '150px' }}
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
            onOpenEdit={handleOpenEditForm}
            onOpenDelete={handleOpenDeleteForm}
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
