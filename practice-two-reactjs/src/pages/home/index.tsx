// Libraries
import { Box } from '@chakra-ui/react';

// Components
import ErrorBoundary from '@components/ErrorBoundary';
import Banner from './BannerSection';
import ReachCustomer from './ReachCustomerSection';
import AdvertiseDescription from './AdvertiseDescriptionSection';
import MemberLine from './MemberLineSection';
import BranchLogo from './LogoSection';
import GetStarted from './GetStartedSection';

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <Box bgImage={"url('src/assets/images/BG_stuff.svg')"} backgroundSize='cover'>
          {/* BANNER SECTION*/}
          <Banner />

          {/* REACH MORE CUSTOMER SECTION */}
          <ReachCustomer />

          {/* ADVERTISE DESCRIPTION SECTION*/}
          <AdvertiseDescription />

          {/* MEMBER LINE SECTION*/}
          <MemberLine />

          {/* LOGO SECTION*/}
          <BranchLogo />

          {/* GET STARTED SESSION */}
          <GetStarted />
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Home;
