// Libraries
import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { widths } from '@themes/metrics';

// Components
import Button from '@components/Button';

interface IProps {
  onFeatureClick?: React.MouseEventHandler<HTMLButtonElement>;
  onPricingClick?: React.MouseEventHandler<HTMLButtonElement>;
  onServicesClick?: React.MouseEventHandler<HTMLButtonElement>;
  onPartnersClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSignUpClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IProps> = ({
  onFeatureClick,
  onPricingClick,
  onPartnersClick,
  onServicesClick,
  onSignUpClick,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box display='flex' flexGrow='row' justifyContent='space-between' margin='20px 0px'>
      <Box>
        <Image
          src='src/assets/images/NinjaMailLogo.svg'
          w={{ sm: widths.medium, md: widths.medium, lg: widths.large }}
        />
      </Box>
      <Box marginTop='5px'>
        {isMobile ? (
          ''
        ) : (
          <>
            <Button onClick={onFeatureClick} variant='ghost' label='Features' />
            <Button onClick={onPricingClick} variant='ghost' label='Pricing' />
            <Button onClick={onPartnersClick} variant='ghost' label='Services' />
            <Button onClick={onServicesClick} variant='ghost' label='Partners' />
          </>
        )}
        <Button onClick={onSignUpClick} variant='solid' label='Sign Up Free' />
      </Box>
    </Box>
  );
};

export default Header;
