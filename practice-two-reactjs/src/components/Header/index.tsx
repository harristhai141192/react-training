// Libraries
import { Box, Image, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { memo } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { widths } from '@themes/metrics';
import { Link as LinkRouter } from 'react-router-dom';

// Components
import Button from '@components/Button';

// themes
import themes from '@themes/index';

interface IProps {
  onSignUpClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IProps> = ({ onSignUpClick }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box
      display='flex'
      flexGrow='row'
      justifyContent='space-between'
      margin='20px 0px'
      textTransform='uppercase'
    >
      <Box>
        <LinkRouter to='/'>
          <Image
            src='src/assets/images/NinjaMailLogo.svg'
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
              <ListItem>
                <Link
                  borderBottom={`3px solid ${themes.colors.green[1000]}`}
                  padding='10px'
                  margin='0px 10px'
                >
                  Features
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom={`3px solid ${themes.colors.green[1000]}`}
                  padding='10px'
                  margin='0px 10px'
                >
                  Pricing
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom={`3px solid ${themes.colors.green[1000]}`}
                  padding='10px'
                  margin='0px 10px'
                >
                  Services
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom={`3px solid ${themes.colors.green[1000]}`}
                  padding='10px'
                  margin='0px 10px'
                >
                  Partners
                </Link>
              </ListItem>
            </>
          )}
          <ListItem>
            <Button onClick={onSignUpClick} variant='solid' label='Sign Up Free' />
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default memo(Header);
