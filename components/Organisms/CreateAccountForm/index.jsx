import React from 'react';
import FormikWizard from 'formik-wizard';
import { FormActions, FormSteps } from '@components';
import steps from './steps';
import { FormRoot, FormHeading } from './styles';

const FormWrapper = props => {
  const handleGoForward = () => {};

  const activeStep = React.useMemo(() => {
    return steps.findIndex(step => {
      return step.id === props.currentStep;
    });
  }, [props.currentStep]);

  return (
    <FormRoot>
      <FormHeading>Criar sua conta</FormHeading>

      {props.children}

      <FormActions>
        <FormSteps
          activeStep={activeStep}
          totalItems={steps.length}
          onStepForward={handleGoForward}
          onStepBack={props.goToPreviousStep}
        />
      </FormActions>
    </FormRoot>
  );
};

const MemoizedFormWrapper = React.memo(FormWrapper, (prev, next) => {
  return prev.currentStep === next.currentStep;
});

export default function CreateAccountForm() {
  const handleSubmit = React.useCallback(values => {
    console.log('full values:', values);
  }, []);

  return (
    <FormikWizard
      steps={steps}
      onSubmit={handleSubmit}
      render={MemoizedFormWrapper}
    />
  );
}
