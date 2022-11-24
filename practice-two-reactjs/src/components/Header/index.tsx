// Libraries
import React, { memo } from 'react';
import { Box, Container, Image, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { widths } from '@themes/metrics';
import { Link as LinkRouter } from 'react-router-dom';

// Components
import { FOOTER_BAR_INFORMATION } from '@mockData/tableData';
import Button from '@components/Button';

// Constants
import { PAGE_ROUTES } from '@constants/routes';
import { LOGO_URL } from '@constants/image';

interface IProps {
  onSignUpClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IProps> = ({ onSignUpClick }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  // GENERATE KEY
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

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
              src={LOGO_URL.imgURL}
              alt={LOGO_URL.alt}
              w={{ sm: widths.medium, md: widths.medium, lg: widths.large }}
            />
          </LinkRouter>
        </Box>

        <Box marginTop='5px' fontFamily='RalewayExtraBold'>
          <UnorderedList listStyleType='none' display='flex' flexDirection='row' fontSize='12px'>
            {isMobile ? (
              ''
            ) : (
              <>
                {FOOTER_BAR_INFORMATION.serviceCenter.map((item) => {
                  return (
                    <ListItem key={generateKey(item)}>
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
              <Button onClick={onSignUpClick} variant='solid' label='Sign Up Free' />
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Header);
