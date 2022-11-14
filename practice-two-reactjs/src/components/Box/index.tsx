import { Box, Text, Image } from '@chakra-ui/react';
import themes from '@themes/index';

interface IProps {
  imageURL?: string;
  imageAlt?: string;
  subText?: string;
  maxWidth?: string;
  width?: string;
}

const BoxComponent = ({ imageURL, imageAlt, subText, maxWidth, width }: IProps) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      maxW={maxWidth}
      boxShadow={'0 0 10px 1px lightgrey'}
      overflow={'hidden'}
      width={width}
      bg='white'
    >
      <Image maxHeight='200px' objectFit='cover' src={imageURL} w='100%' alt={imageAlt} />
      <Box p={5} bg='white'>
        <Box display='flex' alignContent='flex-start'>
          <Text fontSize='sm' textAlign='left' fontFamily='RalewayLight'>
            {subText}
          </Text>
        </Box>
        <Box display='flex' alignContent='flex-start' fontFamily='RalewayBold'>
          <Text paddingTop={2} as='b' fontSize='sm' color={themes.colors.green[1000]}>
            Learn more {'>'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxComponent;
