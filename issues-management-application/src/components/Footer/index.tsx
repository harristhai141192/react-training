// Libraries
import {
  Container,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

// Mocks
import { navFooterData } from '@mockData/navData';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Container as='footer' maxW='8xl'>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        borderTop='1px solid black'
        marginTop='30px'
        padding='15px'
        fontSize='text.small'
        justifyContent='space-between'
      >
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Image
            src='src/assets/images/github_icon.svg'
            w='40px'
            bgColor='white'
            borderRadius='100%'
          />
          <Text marginLeft='15px'> &#169; 2022 GitHub, Inc.</Text>
        </Box>
        <Box>
          <UnorderedList color='black' listStyleType='none' display='flex' flexDirection='row'>
            {!isMobile
              ? navFooterData.map((item) => {
                  return (
                    <ListItem key={generateKey()}>
                      <Text padding={{ md: '10px', lg: '15px' }}>{item}</Text>
                    </ListItem>
                  );
                })
              : ''}
          </UnorderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
