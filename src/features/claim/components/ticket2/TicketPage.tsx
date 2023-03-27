import { Box, Button, Center, Flex, Heading, Spinner, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getKeyInformation } from 'keypom-js';

import { IconBox } from '@/components/IconBox';
import { TicketIcon } from '@/components/Icons';
import { ErrorBox } from '@/components/ErrorBox';
import { useTicketClaim } from '@/features/claim/contexts/TicketClaimContext';
import { useClaimParams } from '@/hooks/useClaimParams';
import { BoxWithShape } from '@/components/BoxWithShape';
import { QrDetails } from '@/features/claim/components/ticket/[id]/QrDetails';
import { NftGift } from '@/features/claim/components/ticket/[id]/NftGift';
import { TokenGift } from '@/features/claim/components/ticket/[id]/TokenGift';
import { DROP_TYPE } from '@/constants/common';
import { DropMetadataCard } from '@/features/claim/components/DropMetadataCard';

export const ClaimTicketFormFlow = () => {
  const { secretKey } = useClaimParams();
  const [claimAttempted, setClaimAttempted] = useState(false);
  const { claimInfoError, isClaimInfoLoading, handleClaim, qrValue, claimError, getDropMetadata } =
    useTicketClaim();
  const [isShowSummary, setShowSummary] = useState(false);

  const { giftType, title, tokens, nftImage } = getDropMetadata();

  const checkClaim = async () => {
    const keyInfo = await getKeyInformation({ secretKey });
    console.log('claiming', claimAttempted, keyInfo.cur_key_use);
    if (!claimAttempted && keyInfo.cur_key_use === 1) {
      // do not await since it will only prevent user from seeing QR code, we can always show error after
      await handleClaim();
    }
    setClaimAttempted(true);
  };

  useEffect(() => {
    checkClaim();
  }, []);

  if (claimInfoError || claimError) {
    return <ErrorBox message={(claimInfoError as string) || (claimError as string)} />;
  }

  if (isClaimInfoLoading) {
    return (
      <Center h={{ base: '300px', md: '500px' }}>
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <Center>
      <VStack gap={{ base: 'calc(24px + 8px)', md: 'calc(32px + 10px)' }}>
        {/** Prompt text */}
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="500" textAlign="center">
          {isShowSummary ? 'Your ticket' : 'Claim your ticket'}
        </Heading>

        <IconBox
          icon={<TicketIcon height={{ base: '8', md: '10' }} width={{ base: '8', md: '10' }} />}
          maxW={{ base: '345px', md: '30rem' }}
          minW={{ base: 'inherit', md: '345px' }}
          p="0"
          pb="0"
        >
          {isShowSummary ? (
            <Box>
              <BoxWithShape bg="white" borderTopRadius="8xl" w="full ">
                <QrDetails qrValue={qrValue} ticketName={title} />
              </BoxWithShape>
              <Flex
                align="center"
                bg="gray.50"
                borderBottomRadius="8xl"
                flexDir="column"
                px="6"
                py="8"
              >
                <Text color="gray.800" fontWeight="500" mb="5" size="lg" textAlign="center">
                  Attendance gifts
                </Text>

                {giftType === DROP_TYPE.NFT ? (
                  <NftGift giftName={title} imageSrc={nftImage} />
                ) : (
                  <TokenGift tokenList={tokens} />
                )}

                <Text color="gray.600" mb="6" size={{ base: 'sm', md: 'base' }} textAlign="center">
                  Return here after checking into the event to claim.
                </Text>
              </Flex>
            </Box>
          ) : (
            <Flex
              align="center"
              flexDir="column"
              p={{ base: '6', md: '8' }}
              pt={{ base: '12', md: '16' }}
            >
              <DropMetadataCard giftType={giftType} title={title} />
              <Button
                type="submit"
                w="full"
                onClick={() => {
                  setShowSummary(true);
                }}
              >
                Show my ticket!
              </Button>
            </Flex>
          )}
        </IconBox>
      </VStack>
    </Center>
  );
};
