import { Box, Text } from '@chakra-ui/react';

import { Member } from '@models/index';
import { Link } from 'react-router-dom';

interface IProps {
  card: Member;
  margin?: string;
  height?: string;
  onClick?: () => void;
  linkToPage?: string;
}

const Card = ({ margin, height, onClick, card, linkToPage = '' }: IProps) => {
  return (
    <Box
      h={height}
      w={{ sm: '100%', md: '25%', lg: '25%' }}
      backgroundImage={card.memberImg}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      data-testid='testCard'
      margin={margin}
      onClick={onClick}
    >
      <Link to={linkToPage}>
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
          <Text
            className='textTitle'
            fontFamily='RalewayExtraBold'
            fontSize={{ sm: 'text.extraLarge', md: 'text.large', lg: 'text.extraLarge' }}
          >
            {card.memberName}
          </Text>
          <Text className='textDescription' fontFamily='RalewayLight' fontSize='text.small'>
            Member Since {card.memberSince?.substring(0, 4)}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default Card;
