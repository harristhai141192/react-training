// Libraries
import { Box, Image, Text } from '@chakra-ui/react';

// Components
import Button from '@components/Button';
import BoxComponent from '@components/Box';
import Card from '@components/Card';
import InputComponent from '@components/Input';
import ErrorBoundary from '@components/ErrorBoundary';

// Mocks
import { MEMBER_DATA } from '@mockData/tableData';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <Box bgImage={"url('src/assets/images/BG_stuff.svg')"} backgroundSize='cover'>
          {/* SESSION BANNER */}
          <Box
            display='flex'
            alignItems='center'
            height={{ sm: '250px', md: '450px', lg: '550px' }}
            margin='35px 3%'
          >
            <Box
              display='flex'
              boxSize={{ sm: '100%', md: '100%', lg: '100%' }}
              flexDirection='column'
              textAlign='left'
              backgroundImage="url('src/assets/images/photo_hero.svg')"
              backgroundRepeat='no-repeat'
              backgroundPosition='right'
              backgroundSize={{ sm: '100%', md: '80%', lg: '60%' }}
              justifyContent={{ sm: 'top', md: 'center' }}
            >
              <Box w={{ sm: '100%', md: '50%', lg: '45%' }} textAlign='left'>
                <Text fontSize='4xl' as='b' marginBottom='30px' fontFamily='PlayFairBold'>
                  Create Stunning Email Campaigns
                </Text>
                <Text
                  fontSize='sm'
                  fontFamily='RalewayLight'
                  marginBottom='13px'
                  marginTop={{ sm: '100px', md: '0px' }}
                >
                  Create and launch email campaigns that captivate your customers in just a few
                  clicks.
                </Text>
                <Box display='flex' flexDirection='row'>
                  <Button label='Try Now' marginRight='15px' size='md'></Button>
                  <Button label='Get A Demo' variant='outline' size='md'></Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* REACH MORE CUSTOMER SESSION */}
          <Box
            bg="url('src/assets/images/bg2.svg')"
            backgroundRepeat='no-repeat'
            height={{ sm: '350px', md: '600px', lg: '800px' }}
            backgroundPosition='center'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            backgroundSize={{ sm: '100%', md: '600px', lg: '800px' }}
            margin='25px 4%'
            textAlign='center'
          >
            <Text
              fontSize='4xl'
              as='b'
              color='#FFFFFF'
              fontFamily='PlayFairBold'
              marginBottom='15px'
            >
              Reach More Customers
            </Text>
            <Button label='Learn How' variant='unstyled' size='md' padding='0px 20px'></Button>
          </Box>

          {/* ADVERTISE DESCRIPTION */}
          <Box display='flex' flexDirection={{ sm: 'column', md: 'row' }} p='0% 4%'>
            <Box marginRight='5%'>
              <BoxComponent
                subText='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.'
                imageURL='src/assets/images/photoAva1.png'
                width={{ sm: '270px', md: '250px' }}
              />
            </Box>
            <Box
              marginTop='5%'
              display={{ sm: 'flex', md: '' }}
              justifyContent={{ sm: 'flex-end', md: '' }}
              marginBottom={{ sm: '30px', md: '0px' }}
            >
              <BoxComponent
                subText='Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.'
                imageURL='src/assets/images/photoAva2.svg'
                width={{ sm: '270px', md: '250px' }}
              />
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              textAlign='left'
              margin='0% 7%'
              padding={{ sm: '10px', md: '0px' }}
              alignItems={{ sm: 'center', md: '' }}
            >
              <Text fontSize='3xl' fontFamily='PlayFairBold'>
                The source for proven, engaging email campaigns
              </Text>
              <Text fontSize='xs' fontFamily='RalewayLight' marginTop='15px'>
                Whether you’re a startup, small business, e-commerce store, or want to promote your
                app, NinjaMail has the feature set tailored for your business.
              </Text>
            </Box>
          </Box>

          {/* SESSION MEMBER CARD */}
          <Box margin={{ sm: '0 15%', md: '0 4%' }}>
            <Box
              display='flex'
              flexDirection={{ sm: 'column', md: 'row' }}
              justifyContent='space-evenly'
              alignItems='center'
            >
              {MEMBER_DATA.map((item) => {
                return (
                  <Card
                    key={generateKey()}
                    card={item}
                    margin='5% 0%'
                    height={{ sm: '170px', md: '250px' }}
                    linkToPage={PAGE_ROUTES.DETAIL}
                  />
                );
              })}
            </Box>

            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              textAlign='center'
              marginTop='30px'
            >
              <Text fontSize='3xl' fontFamily='PlayFairBold'>
                Learn how others are reaching their audience easier than ever before.
              </Text>
              <Box
                display='flex'
                flexDirection='row'
                width={{ sm: '60%', md: '50%' }}
                alignItems='flex-start'
                flexWrap='wrap'
                textAlign='center'
                marginTop='5px'
              >
                <Box
                  flexGrow={{ sm: '10', md: '5' }}
                  width={{ sm: '100%', md: '' }}
                  marginRight='15px'
                  display='flex'
                  flexDirection='column'
                  justifyContent={{ sm: 'center', md: '' }}
                >
                  <Box>
                    <InputComponent placeholder='Enter your email' />
                  </Box>
                  <Box marginBottom='10px'>
                    <Text as='sub' color='var(--main-color)'>
                      Thanks! Email received
                    </Text>
                  </Box>
                </Box>
                <Box
                  flexGrow={{ sm: '10', md: '5' }}
                  display='flex'
                  alignItems='self-start'
                  justifyContent='center'
                >
                  <Button
                    variant='solid'
                    label='Join our list'
                    padding='16px'
                    width='120px !important'
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* SESSION LOGO * 5 */}
          <Box
            display='flex'
            flexDirection='row'
            height={{ sm: '300px', md: '150px', lg: '220px' }}
            justifyContent='space-evenly'
            flexWrap='wrap'
            marginBottom='20px'
            margin='0 15% 20px 15%'
          >
            <Box
              display='flex'
              alignItems='center'
              w='100%'
              textAlign='center'
              margin='35px 0px'
              justifyContent='center'
            >
              <Text fontSize='3xl' fontFamily='PlayFairBold'>
                All the best brands already use us.
              </Text>
            </Box>
            <Image
              src='src/assets/images/Logo1.svg'
              w={{ sm: '30%', md: '10%', lg: '20%' }}
              h={{ sm: '10%', md: '20%', lg: '20%' }}
              order={{ sm: '3', md: '1', lg: '1' }}
              margin='0px 20px'
            />
            <Image
              src='src/assets/images/Logo2.svg'
              w={{ sm: '30%', md: '10%' }}
              h={{ sm: '10%', md: '20%', lg: '20%' }}
              order={{ sm: '1', md: '2' }}
              margin='0px 20px'
            />
            <Image
              src='src/assets/images/Logo3.svg'
              w={{ sm: '30%', md: '10%' }}
              h={{ sm: '10%', md: '20%', lg: '20%' }}
              order={{ sm: '5', md: '3' }}
              margin='0px 20px'
            />
            <Image
              src='src/assets/images/Logo4.svg'
              w={{ sm: '30%', md: '10%' }}
              h={{ sm: '10%', md: '20%', lg: '20%' }}
              order={{ sm: '4', md: '4' }}
              margin='0px 20px'
            />
            <Image
              src='src/assets/images/Logo5.svg'
              w={{ sm: '30%', md: '10%' }}
              h={{ sm: '10%', md: '20%', lg: '20%' }}
              order={{ sm: '2', md: '5' }}
              margin='0px 20px'
            />
          </Box>
          {/* GET STARTED SESSION */}
          <Box
            height={{ sm: '290px', md: '240px', lg: '366px' }}
            bgColor='var(--main-color)'
            display='flex'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
          >
            <Text fontSize='4xl' fontFamily='PlayFairBold' color='white' marginBottom='30px'>
              Get started today!
            </Text>
            <Button variant='unstyled' label='Pick a plan' />
          </Box>
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Home;
