// Libraries
import React, { memo } from 'react';
import { Box, Container, Image, Link, ListItem, UnorderedList, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { widths } from '@themes/metrics';
import { Link as LinkRouter } from 'react-router-dom';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

interface IProps {
  onSignUpClick?: React.MouseEventHandler<HTMLButtonElement>;
  footerInformationBar: {
    serviceCenter: string[];
    informationCenter: string[];
    socialCenter: string[];
    contactCenter: string[];
  };
}

const Header: React.FC<IProps> = ({ onSignUpClick, footerInformationBar }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Container as='header' margin='0 auto' w='100%'>
      <Box
        display='flex'
        flexGrow='row'
        justifyContent='space-between'
        margin='20px 0px'
        textTransform='uppercase'
      >
        <Box>
          <LinkRouter to={PAGE_ROUTES.HOME}>
            <Image
              src='src/assets/images/NinjaMailLogo.svg'
              alt='Ninja Mail Logo'
              w={{ sm: widths.medium, md: widths.medium, lg: widths.large }}
            />
          </LinkRouter>
        </Box>

        <Box marginTop='5px' fontFamily='RalewayExtraBold'>
          <UnorderedList
            listStyleType='none'
            display='flex'
            flexDirection='row'
            fontSize='12px'
            alignItems='center'
          >
            {isMobile ? (
              ''
            ) : (
              <>
                {footerInformationBar.serviceCenter.map((item) => {
                  return (
                    <ListItem key={generateKey()}>
                      <Link
                        borderBottom='3px solid var(--main-color)'
                        padding='10px'
                        margin='0px 10px'
                      >
                        {item}
                      </Link>
                    </ListItem>
                  );
                })}
              </>
            )}
            <ListItem>
              <Button onClick={onSignUpClick} variant='solid'>
                Sign Up Free
              </Button>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Header);
