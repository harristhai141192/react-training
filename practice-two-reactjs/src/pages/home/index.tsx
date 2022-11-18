// Libraries
import { Box, Image, Text } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

// Components
import Header from '@components/Header';
import Button from '@components/Button';
import BoxComponent from '@components/Box';
import Card from '@components/Card';
import InputComponent from '@components/Input';
import Footer from '@components/Footer';

// themes
import themes from '@themes/index';

// Mocks
import MEMBER_DATA from '../../mockData/tableData';

const Home = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  // Generate Key for key
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;
  return (
    <>
      {/* HEADER SESSION */}
      <Header />
      <Box bgImage={"url('src/assets/images/BG_stuff.svg')"} backgroundSize='cover'>
        {/* SESSION BANNER */}
        <Box
          display='flex'
          alignItems='center'
          height={{ sm: '250px', md: '450px', lg: '800px' }}
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
            justifyContent={isMobile ? 'top' : 'center'}
          >
            <Box w={{ sm: '100%', md: '50%', lg: '45%' }} textAlign='left'>
              <Text fontSize='4xl' as='b' marginBottom='30px' fontFamily='PlayFairBold'>
                Create Stunning Email Campaigns
              </Text>
              <Text
                fontSize='sm'
                fontFamily='RalewayLight'
                marginBottom='13px'
                marginTop={isMobile ? '100px' : ''}
              >
                Create and launch email campaigns that captivate your customers in just a few
                clicks.
              </Text>
              <Box display='flex' flexDirection='row'>
                <Button label='Try Now' marginRight='25px' size='md'></Button>
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
        >
          <Text fontSize='4xl' as='b' color='#FFFFFF' fontFamily='PlayFairBold' marginBottom='15px'>
            Reach More Customers
          </Text>
          <Button label='Learn How' variant='unstyled' size='md' padding='0px 20px'></Button>
        </Box>

        {/* ADVERTISE DESCRIPTION */}
        <Box
          height={{ sm: '1100px', md: '600px', lg: '500px' }}
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          p='0% 15%'
        >
          <Box marginRight='5%'>
            <BoxComponent
              subText='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.'
              imageURL='src/assets/images/photoAva1.png'
              width={isMobile ? '270px' : '250px'}
            />
          </Box>
          <Box
            marginTop='5%'
            display={isMobile ? 'flex' : ''}
            justifyContent={isMobile ? 'flex-end' : ''}
            marginBottom={isMobile ? '30px' : ''}
          >
            <BoxComponent
              subText='Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.'
              imageURL='src/assets/images/photoAva2.svg'
              width={isMobile ? '270px' : '250px'}
            />
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            textAlign='left'
            margin='0% 7%'
            padding={isMobile ? '10px' : ''}
            alignItems={isMobile ? 'center' : ''}
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
        <Box height={{ sm: '950px', md: '600px', lg: '600px' }}>
          <Box
            display='flex'
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent='space-evenly'
            alignItems='center'
          >
            {MEMBER_DATA.map((item) => {
              return (
                <>
                  <Card
                    card={item}
                    key={generateKey(item.memberSince)}
                    width={isMobile ? '80%' : '30%'}
                    margin='5% 0%'
                    height={isMobile ? '170px' : '250px'}
                    linkToPage='/detail'
                  />
                </>
              );
            })}
          </Box>

          <Box display='flex' flexDirection='column' alignItems='center'>
            <Text fontSize='3xl' fontFamily='PlayFairBold' margin='3% 20%'>
              Learn how others are reaching their audience easier than ever before.
            </Text>
            <Box
              display='flex'
              flexDirection='row'
              width={isMobile ? '80%' : '50%'}
              alignItems='flex-start'
            >
              <Box flexGrow='5' marginRight='15px'>
                <InputComponent placeholder='Enter your email' />
                <Text as='sub' color={themes.colors.green[1000]}>
                  Thanks! Email received
                </Text>
              </Box>
              <Box flexGrow='5' display='flex' alignItems='self-start'>
                <Button variant='solid' label='Join our list' padding='16px' />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* SESSION LOGO * 5 */}
        <Box
          display='flex'
          flexDirection='row'
          height={{ sm: '500px', md: '150px', lg: '220px' }}
          justifyContent='space-evenly'
          flexWrap='wrap'
          marginBottom='20px'
        >
          <Box
            display='flex'
            alignItems='center'
            w='100%'
            justifyContent='center'
            margin='35px 0px'
          >
            <Text fontSize='3xl' fontFamily='PlayFairBold'>
              All the best brands already use us.
            </Text>
          </Box>
          <Image src='src/assets/images/Logo1.svg' w={isMobile ? '40%' : '10%'} />
          <Image src='src/assets/images/Logo2.svg' w={isMobile ? '40%' : '10%'} />
          <Image src='src/assets/images/Logo3.svg' w={isMobile ? '40%' : '10%'} />
          <Image src='src/assets/images/Logo4.svg' w={isMobile ? '40%' : '10%'} />
          <Image src='src/assets/images/Logo5.svg' w={isMobile ? '40%' : '10%'} />
        </Box>
        {/* GET STARTED SESSION */}
        <Box
          height={{ sm: '290px', md: '240px', lg: '366px' }}
          bgColor={themes.colors.green[1000]}
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
        {/* FOOTER */}
        <Footer />
      </Box>
    </>
  );
};

export default Home;
