import { HeaderSection } from '@/features/landing/components/HeaderSection';
import { DropsSection } from '@/features/landing/components/DropsSection';
import { PossibilitiesSection } from '@/features/landing/components/PossibilitiesSection';
import { ExtraSection } from '@/features/landing/components/ExtraSection';

import { PartnerSection } from '@/features/landing/components/PartnerSection';

const LandingPage = () => {
  return (
    <>
      <HeaderSection />
      <DropsSection />
      {/* <PossibilitiesSection /> */}
      <ExtraSection/>
      <PartnerSection/>
    </>
  );
};

export default LandingPage;
