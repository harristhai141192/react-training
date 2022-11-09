import { Box, Text } from '@chakra-ui/react';

interface IProps {
  imageBg?: string;
  titleText?: string;
  subText?: string;
  width?: string;
}

const Card = ({ imageBg, titleText, subText, width }: IProps) => {
  return (
    <Box
      h={'250px'}
      w={width}
      backgroundImage={imageBg}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      data-testid='testCard'
    >
      <Box
        display='flex'
        flexDirection='column'
        textAlign='left'
        p='20px'
        justifyContent='end'
        height='100%'
        backgroundImage='linear-gradient(to bottom, rgba(230, 230, 230, 0), rgba(30, 29, 29, 0.459))'
        color='white'
      >
        <Text className='textTitle' fontSize='3xl' fontFamily='RalewayExtraBold'>
          {titleText}
        </Text>
        <Text className='textDescription' fontSize='sm' fontFamily='RalewayBold'>
          {subText}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
