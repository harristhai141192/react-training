import React from 'react';
import {
  Box,
  Button,
  Container,
  Image,
  Link,
  ListItem,
  UnorderedList,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { navHeaderData } from '@mockData/navData';
import { generateKey } from '@utils/mainFeaturesUtils';

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
          <Image
            src='src/assets/images/github_icon.svg'
            w='40px'
            bgColor='white'
            borderRadius='100%'
          />
          <UnorderedList color='white' listStyleType='none' display='flex' flexDirection='row'>
            {!isMobile ? (
              navHeaderData.map((item) => {
                return (
                  <ListItem key={generateKey()}>
                    <Link padding='15px'>{item}</Link>
                  </ListItem>
                );
              })
            ) : (
              <Text>Gitlook Mobile Version</Text>
            )}
          </UnorderedList>
        </Box>
        <Box display='flex' alignItems='center'>
          <Button variant='solid' padding='20px 80px'>
            <Link>+ Add new issue</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
