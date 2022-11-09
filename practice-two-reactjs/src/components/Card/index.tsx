import { Box as BoxChakra, Text } from '@chakra-ui/react';
import './index.styles.css';

interface IProps {
  imageBg?: string;
  titleText?: string;
  subText?: string;
  width?: string;
}

const Card = ({ imageBg, titleText, subText, width }: IProps) => {
  return (
    <BoxChakra
      h={'250px'}
      w={width}
      backgroundImage={imageBg}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      data-testid='testCard'
    >
      <div className='cardDetail'>
        <Text className='textTitle' fontSize='3xl' fontFamily='RalewayExtraBold'>
          {titleText}
        </Text>
        <Text className='textDescription' fontSize='sm' fontFamily='RalewayBold'>
          {subText}
        </Text>
      </div>
    </BoxChakra>
  );
};

export default Card;
