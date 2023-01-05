// Libraries
import {
  Box,
  Container,
  Image,
  ListItem,
  UnorderedList,
  useMediaQuery,
  Text,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Mocks
import { navHeaderData } from '@mockData/navData';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

// Routes
import { PAGE_ROUTES } from '@constants/routes';

const Header = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Container as='header' w='100%' maxW='9xl' margin='0 auto' fontSize='text.small'>
      <Box
        w='100%'
        height='70px'
        display='flex'
        flexDirection='row'
        padding='15px'
        bgColor='backgroundHeader'
        justifyContent='space-between'
      >
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Link to={PAGE_ROUTES.HOME}>
            <Image src='/images/github_icon.svg' w='40px' bgColor='white' borderRadius='100%' />
          </Link>
          <UnorderedList color='white' listStyleType='none' display='flex' flexDirection='row'>
            {!isMobile ? (
              navHeaderData.map((item) => {
                return (
                  <ListItem padding='15px' key={generateKey()}>
                    <LinkChakra>{item}</LinkChakra>
                  </ListItem>
                );
              })
            ) : (
              <Text>Gitlook Mobile Version</Text>
            )}
          </UnorderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
