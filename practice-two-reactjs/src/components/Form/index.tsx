// Libraries
import { FormControl, FormLabel, Box, Text, Textarea, Select } from '@chakra-ui/react';
import React, { FormEvent } from 'react';

// Components
import InputComponent from '@components/Input';
import Button from '@components/Button';
import { IMemberDetail } from '@models/index';

interface IProps {
  defaultMemberData?: IMemberDetail;
  formName?: string;
  errorName?: boolean;
  errorNameText?: string;
  errorDOB?: boolean;
  errorDOBText?: string;
  errorPhone?: boolean;
  errorPhoneText?: string;
  errorMember?: boolean;
  errorMemberText?: string;
  errorEmail?: boolean;
  errorEmailText?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormComponent: React.FC<IProps> = ({
  defaultMemberData,
  formName,
  errorName,
  errorNameText = '',
  errorDOB,
  errorDOBText = '',
  errorPhone,
  errorPhoneText = '',
  errorMember,
  errorMemberText = '',
  errorEmail,
  errorEmailText = '',
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
            errorText={errorNameText}
            defaultValue={defaultMemberData?.memberName}
          />
          <FormLabel marginTop={3} htmlFor='dateOfBirth' fontSize='sm'>
            Date of birth:
          </FormLabel>
          <InputComponent
            name='dateOfBirth'
            type='date'
            error={errorDOB}
            errorText={errorDOBText}
            defaultValue={defaultMemberData?.dateOfBirth}
          />
          <FormLabel marginTop={3} htmlFor='memberImage' fontSize='sm'>
            Member Image:
          </FormLabel>
          <InputComponent name='memberImage' defaultValue={defaultMemberData?.memberImg} />
          <FormLabel marginTop={3} htmlFor='phone' fontSize='sm'>
            Phone:
          </FormLabel>
          <InputComponent
            name='phone'
            error={errorPhone}
            errorText={errorPhoneText}
            defaultValue={defaultMemberData?.phone}
          />
          <FormLabel marginTop={3} htmlFor='memberSince' fontSize='sm'>
            Member since:
          </FormLabel>
          <InputComponent
            name='memberSince'
            type='date'
            error={errorMember}
            errorText={errorMemberText}
            defaultValue={defaultMemberData?.memberSince}
          />
          <FormLabel marginTop={3} htmlFor='email' fontSize='sm'>
            Email:
          </FormLabel>
          <InputComponent
            name='gender'
            type='text'
            error={errorEmail}
            errorText={errorEmailText}
            defaultValue={defaultMemberData?.gender}
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
            <Button label='Submit' type='submit' loadingText='Submitting' />
            <Button label='Cancel' onClick={onCancel} />
          </Box>
        </FormControl>
      </Box>
    </form>
  );
};

export default FormComponent;
