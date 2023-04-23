import { Center, Heading, SimpleGrid } from '@chakra-ui/react';

import { GradientSpan } from '@/components/GradientSpan';

import { LandingCard } from './LandingCard';

export const ExtraSection = () => {
  return (
    <Center flexDir="column" maxW="995px" mx="auto">
      <Heading
        fontSize={{ base: '24px', md: '36px' }}
        fontWeight="600"
        lineHeight={{ base: '32px', md: '43px' }}
        maxW="600px"
        mb={{ base: '4', md: '10' }}
        textAlign="center"
      >
        We connect you to
        <br /> the <GradientSpan>Blockchain</GradientSpan> and to 
        <br /> <GradientSpan>Organization</GradientSpan> 
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        mb={{ base: '14', md: '120px' }}
        spacing={{ base: '4', md: '6' }}
      >
        <LandingCard
          buttonText="Get Onboarded"
          description="Get a wallet, NFT, and instant DAO membership"
          header="Join Without Friction"
          onClick={() => {
            window.location.href = 'https://onboarddao.org/join';
          }}
        />
        <LandingCard
          buttonText="Request For Partnership"
          description="Join our telegram and request any partnership to be fulfilleed by our BD guild."
          header="🤝 as a Service"
          onClick={() => {
            window.location.href = 'https://onboarddao.org/telegram';
          }}
        />
      </SimpleGrid>
    </Center>
  );
};
