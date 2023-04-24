import { Box, type ChakraProps, HStack, Text, Link, Flex } from '@chakra-ui/react';

import { TwitterLogoIcon , LogoNear } from '@/components/Icons';

type FooterProps = ChakraProps;

const TWITTER_LINK = 'https://twitter.com/onboard_dao';
const NEAR_LINK = 'https://near.org/';
const TELEGRAM_LINK = 'https://t.me/+TYGncu1CaAc4YjAx';


export const Footer = (props: FooterProps) => {
  return (
    // TODO: ask designer for color coded in design system
    <Box bgColor="#222734" zIndex="dropdown" {...props}>
      <Flex
        color="white"
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginX="auto"
        maxW="75rem"
        px="6"
        py="6"
      >
              <Flex
        color="white"
        flexWrap="wrap"
        // justifyContent="space-between"
        // marginX="auto"
      >
        {/* Follow us Twitter */}
        <Link href={TWITTER_LINK} target="_blank">
          <HStack align="center" justify="center">
            <TwitterLogoIcon
              h={{ base: '20px', md: '24px' }}
              mr="2.5"
              mt="1px"
              w={{ base: '20px', md: '24px' }}
            />
          </HStack>
        </Link>
        {/* <Link href={TELEGRAM_LINK} target="_blank">
          <HStack align="center" justify="center">
            <TwitterLogoIcon
              h={{ base: '20px', md: '24px' }}
              mr="2.5"
              mt="1px"
              w={{ base: '20px', md: '24px' }}
            />
          </HStack>
        </Link> */}
        </Flex>

        {/* Powered by NEAR */}
        <Link href={NEAR_LINK} target="_blank">
          <HStack spacing="6px">
            <Text size={{ base: 'sm', md: 'md' }} whiteSpace="nowrap">
              Powered by
            </Text>
            <LogoNear
              color="gray.400"
              h={{ base: '20px', md: '24px' }}
              w={{ base: '90px', md: '94px' }}
            />
          </HStack>
        </Link>
      </Flex>
    </Box>
  );
};
