import React from 'react';
import {
  Box,
  Button,
  Container,
  Image,
  ListItem,
  UnorderedList,
  useMediaQuery,
  Text,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { navHeaderData } from '@mockData/navData';
import { generateKey } from '@utils/mainFeaturesUtils';
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
            <Image
              src='/src/assets/images/github_icon.svg'
              w='40px'
              bgColor='white'
              borderRadius='100%'
            />
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
        <Box display='flex' alignItems='center'>
          <Link to={PAGE_ROUTES.ADD}>
            <Button variant='ghost' padding='12px 70px'>
              + Add new issue
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
