import { useFormContext } from 'react-hook-form';
import { Box, Button, Divider, HStack } from '@chakra-ui/react';

import { IconBox } from '@/common/components/IconBox';
import { LinkIcon } from '@/common/components/Icons';
import { Step } from '@/common/components/Step/Step';

import { useDropFlowContext } from '../contexts/DropFlowContext';

import { useCreateTicketDropContext } from './CreateTicketDropContext/CreateTicketDropContext';

export const CreateTicketDropForm = () => {
  const { onNext } = useDropFlowContext();
  const {
    reset,
    watch,
    formState: { isValid, dirtyFields, errors, defaultValues, touchedFields },
  } = useFormContext();

  const { currentIndex, onNextStep, onPreviousStep, formSteps } = useCreateTicketDropContext();

  const currentStep = formSteps[currentIndex];

  const stepsDisplay = formSteps.map((step, index) => (
    <Step key={step.name} index={index + 1} isActive={currentIndex === index} stepItem={step} />
  ));

  // TODO: add next step to summary
  const handleSubmitClick = () => {
    onNext();
  };

  const handleNextStepClick = () => {
    reset(defaultValues, { keepValues: true });
    onNextStep();
  };

  // isDirty from react form hook does not match with dirtyFields correctly
  // https://github.com/react-hook-form/react-hook-form/issues/4740
  const isDirty = Object.keys(dirtyFields).length > 0;

  return (
    <IconBox
      icon={<LinkIcon h={{ base: '7', md: '9' }} />}
      maxW={{ base: '21.5rem', md: '36rem' }}
      mx="auto"
    >
      <HStack
        flexWrap="nowrap"
        justifyContent={{ base: 'flex-start', md: 'center' }}
        mt={{ base: '8', md: '0' }}
        overflowX={{ base: 'scroll', md: 'visible' }}
        spacing={{ base: '2', md: '4' }}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        {stepsDisplay}
      </HStack>
      {currentStep.component}
      <Divider my={{ base: '6', md: '8' }} />
      <HStack justifyContent="flex-end" spacing="auto">
        {currentIndex > 0 && (
          <Button variant="secondary" onClick={onPreviousStep}>
            Go back
          </Button>
        )}
        {currentStep.isSkipable && !isDirty ? (
          <Button variant="secondary" onClick={handleNextStepClick}>
            Skip this step
          </Button>
        ) : (
          <Button disabled={!isValid} onClick={handleNextStepClick}>
            Continue
          </Button>
        )}
      </HStack>
      {/* For testing purposes, will remove these code after review is done */}
      <Box textAlign="left">
        <pre>
          {JSON.stringify(
            {
              isValid,
              isDirty,
              dirtyFields,
              errors,
              touchedFields,
              ...watch(),
            },
            null,
            2,
          )}
        </pre>
      </Box>
    </IconBox>
  );
};
