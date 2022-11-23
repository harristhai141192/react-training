// Libraries
import { FormControl, FormLabel, Box, Text, Textarea, Select } from '@chakra-ui/react';
//  IMPORT REACT NEN DE TREN CUNG
import React, { FormEvent } from 'react';

// Components
import InputComponent from '@components/Input';
import Button from '@components/Button';
import { Member } from '@models/index';

// ERROR MESSAGE
interface IProps {
  defaultMemberData?: Member;
  formName?: string;
  errorName?: boolean;
  errorDOB?: boolean;
  errorPhone?: boolean;
  errorMember?: boolean;
  errorEmail?: boolean;
  isLoading?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormComponent: React.FC<IProps> = ({
  defaultMemberData,
  formName,
  errorName,
  errorDOB,
  errorPhone,
  errorMember,
  errorEmail,
  isLoading,
  onSubmit = () => {},
  onCancel = () => {},
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Box display='flex' flexDirection='column'>
        <Text fontSize='2xl'>{formName}</Text>
        <FormControl>
          <FormLabel marginTop={3} htmlFor='name' fontSize='sm'>
            Your name:
          </FormLabel>
          <InputComponent
            name='name'
            error={errorName}
            defaultValue={defaultMemberData?.memberName}
          />
          <FormLabel marginTop={3} htmlFor='dateOfBirth' fontSize='sm'>
            Date of birth:
          </FormLabel>
          <InputComponent
            name='dateOfBirth'
            type='date'
            error={errorDOB}
            defaultValue={defaultMemberData?.dateOfBirth}
          />
          <FormLabel marginTop={3} htmlFor='memberImage' fontSize='sm'>
            Member Image:
          </FormLabel>
          <InputComponent name='memberImage' defaultValue={defaultMemberData?.memberImg} />
          <FormLabel marginTop={3} htmlFor='phone' fontSize='sm'>
            Phone:
          </FormLabel>
          <InputComponent name='phone' error={errorPhone} defaultValue={defaultMemberData?.phone} />
          <FormLabel marginTop={3} htmlFor='memberSince' fontSize='sm'>
            Member since:
          </FormLabel>
          <InputComponent
            name='memberSince'
            type='date'
            error={errorMember}
            defaultValue={defaultMemberData?.memberSince}
          />
          <FormLabel marginTop={3} htmlFor='email' fontSize='sm'>
            Email:
          </FormLabel>
          <InputComponent
            name='gender'
            type='text'
            error={errorEmail}
            defaultValue={defaultMemberData?.email}
          />
          <FormLabel marginTop={3} htmlFor='gender' fontSize='sm'>
            Gender:
          </FormLabel>
          <Select name='gender' marginTop={3} size='sm' defaultValue={defaultMemberData?.gender}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </Select>
          <FormLabel marginTop={3} htmlFor='job' fontSize='sm'>
            Job:
          </FormLabel>
          <InputComponent name='job' defaultValue={defaultMemberData?.job} />
          <FormLabel marginTop={3} htmlFor='description' fontSize='sm'>
            Description:
          </FormLabel>
          <Textarea
            marginTop={3}
            name='description'
            defaultValue={defaultMemberData?.description}
          ></Textarea>
          <Box
            marginTop={7}
            marginBottom={5}
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-end'
          >
            <Button isLoading={isLoading} label='Submit' type='submit' loadingText='Submitting' />
            <Button label='Cancel' onClick={onCancel} isLoading={isLoading} />
          </Box>
        </FormControl>
      </Box>
    </form>
  );
};

export default FormComponent;
