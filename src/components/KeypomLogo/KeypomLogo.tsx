import { Link, Image } from '@chakra-ui/react';

export const KeypomLogo = () => {
  return (
    <Link href="/">
      <Image alt="onboard-logo" src="/assets/onboard.webp" w={{ base: '102px', md: '156px' }} />
    </Link>
  );
};
