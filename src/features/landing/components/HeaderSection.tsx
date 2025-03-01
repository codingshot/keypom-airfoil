import { Center, Heading, HStack, Text } from '@chakra-ui/react';

import { GradientSpan } from '@/components/GradientSpan';
import { LogoNear } from '@/components/Icons';

export const HeaderSection = () => {
  return (
    <Center flexDir="column" maxW="600px" mx="auto" py={{ base: '10', md: '16' }}>
      <Heading
        fontSize={{ base: '32px', md: '60px' }}
        fontWeight="600"
        lineHeight={{ base: '43px', md: '72px' }}
        mb={{ base: '4', md: '6' }}
        textAlign="center"
      >
        <GradientSpan>Web3</GradientSpan> made easy by <GradientSpan>OnboardDAO</GradientSpan>
      </Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        mb={{ base: '6', md: '8' }}
        textAlign="center"
      >
        {`Onboarding the next Billion HUMANS to Web3`}
      </Text>
      {/* Powered by NEAR */}
      <HStack>
        <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
          Powered by
        </Text>
        <LogoNear color="gray.400" h="25px" w="95px" />
      </HStack>
    </Center>
  );
};
