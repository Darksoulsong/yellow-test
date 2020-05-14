import React from 'react';
import { FormActions, FormSteps } from '@components';

import { PersonalInfoOne, PersonalInfoTwo, AccountInfo } from './steps';

import { FormRoot, FormHeading, FormHolder } from './styles';

export default function LoginForm() {
  const [activeStep, setActiveStep] = React.useState(1);
  const handleStepChange = React.useCallback(step => {
    setActiveStep(step);
  }, []);

  const activeForm = React.useMemo(() => {
    switch (activeStep) {
      case 1:
        return <PersonalInfoOne />;
      case 2:
        return <PersonalInfoTwo />;
      default:
        return <AccountInfo />;
    }
  }, [activeStep]);

  console.log({ activeStep });

  return (
    <FormRoot>
      <FormHeading>Criar sua conta</FormHeading>

      <FormHolder>
        <form autoComplete="off">{activeForm}</form>
      </FormHolder>

      <FormActions style={{ marginTop: 'auto' }}>
        <FormSteps
          activeStep={1}
          totalItems={3}
          onStepChange={handleStepChange}
        />
      </FormActions>
    </FormRoot>
  );
}
