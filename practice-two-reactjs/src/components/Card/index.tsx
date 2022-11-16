import { Box, Text } from '@chakra-ui/react';

import { IMemberDetail } from '@models/index';

interface IProps {
  card: IMemberDetail;
  width?: string;
  margin?: string;
  height?: string;
  onClick?: () => void;
}

const Card = ({ width, margin, height, onClick, card }: IProps) => {
  return (
    <Box
      h={height}
      w={width}
      backgroundImage={card.memberImg}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      data-testid='testCard'
      margin={margin}
      onClick={onClick}
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
          {card.memberName}
        </Text>
        <Text className='textDescription' fontSize='sm' fontFamily='RalewayBold'>
          Member Since {card.memberSince?.slice(card.memberSince?.lastIndexOf('/') + 1)}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
