import { HeaderSection } from '@/features/landing/components/HeaderSection';
import { DropsSection } from '@/features/landing/components/DropsSection';
import { PossibilitiesSection } from '@/features/landing/components/PossibilitiesSection';
import { ExtraSection } from '@/features/landing/components/ExtraSection';

const LandingPage = () => {
  return (
    <>
      <HeaderSection />
      <DropsSection />
      {/* <PossibilitiesSection /> */}
      <ExtraSection/>
    </>
  );
};

export default LandingPage;
