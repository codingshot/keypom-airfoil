import { Center, Heading, SimpleGrid } from '@chakra-ui/react';

import { GradientSpan } from '@/components/GradientSpan';

import { LandingCard } from './LandingCard';

export const PartnerSection = () => {
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
<GradientSpan>Working</GradientSpan> with  
        <br /> the <GradientSpan>Best in Web3</GradientSpan> 
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        mb={{ base: '14', md: '120px' }}
        spacing={{ base: '4', md: '6' }}
      >

      </SimpleGrid>
    </Center>
  );
};
