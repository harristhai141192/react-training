import { Box as BoxChakra, Text, Image } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import './index.styles.css';
import themes from '@themes/index';

interface IProps {
  imageURL?: string;
  imageAlt?: string;
  subText?: string;
  maxWidth?: string;
}

const Box = ({ imageURL, imageAlt, subText, maxWidth }: IProps) => {
  return (
    <BoxChakra maxW={maxWidth} boxShadow={'0 0 10px 1px lightgrey'} overflow={'hidden'}>
      <div className='cardImage'>
        <Image src={imageURL} w={'100%'} alt={imageAlt} paddingBottom={2} />
      </div>
      <div className='textDetail'>
        <Text fontSize='sm' textAlign='left'>
          {subText}
        </Text>
        <Text paddingTop={2} as='b' fontSize='sm' color={themes.colors.green[1000]}>
          Learn more <ArrowRightIcon w={2} h={2} />
        </Text>
      </div>
    </BoxChakra>
  );
};

export default Box;
