// Libraries
import { FormControl, FormLabel, Box, Text } from '@chakra-ui/react';
import React, { FormEvent } from 'react';

// Components
import InputComponent from '@components/Input';
import Button from '@components/Button';

interface IProps {
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
  isSubmitting?: boolean;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormComponent: React.FC<IProps> = ({
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
  isSubmitting,
  onCancel = () => {},
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Box display='flex' flexDirection='column'>
        <Text fontSize='2xl'>{formName}</Text>
        <FormControl>
          <FormLabel htmlFor='name'>Your name: </FormLabel>
          <InputComponent name='name' error={errorName} errorText={errorNameText} />

          <FormLabel htmlFor='dateOfBirth'>Date of birth:</FormLabel>
          <InputComponent name='dateOfBirth' error={errorDOB} errorText={errorDOBText} />

          <FormLabel htmlFor='phone'>Phone:</FormLabel>
          <InputComponent name='phone' error={errorPhone} errorText={errorPhoneText} />

          <FormLabel htmlFor='memberDate'>Member since:</FormLabel>
          <InputComponent
            name='memberDate'
            type='date'
            error={errorMember}
            errorText={errorMemberText}
          />

          <FormLabel htmlFor='email'>Email:</FormLabel>
          <InputComponent name='email' type='text' error={errorEmail} errorText={errorEmailText} />
          <Box marginTop={10} display='flex' justifyContent='flex-start' alignItems='flex-end'>
            <Button label='Submit' isLoading={isSubmitting} loadingText='Submitting' />
            <Button label='Cancel' onClick={onCancel} loadingText='Submitting' />
          </Box>
        </FormControl>
      </Box>
    </form>
  );
};

export default FormComponent;
