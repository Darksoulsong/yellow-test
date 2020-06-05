import React from 'react';
import FormikWizard from 'formik-wizard';
import { FormActions, FormSteps } from '@components';
import steps from './steps';
import { FormRoot } from './styles';

const INIT_OF_STEPS = 2;
const END_OF_STEPS = 9;

const FormWrapper = props => {
  const handleGoForward = () => {};

  const activeStep = React.useMemo(() => {
    return steps.findIndex(step => {
      return step.id === props.currentStep;
    });
  }, [props.currentStep]);

  return (
    <FormRoot justify={steps[activeStep].justify}>
      {props.children}
      {(!steps[activeStep].removeControls ||
        !steps[activeStep].removeSteps) && (
        <FormActions>
          <FormSteps
            proportion="20px"
            activeStep={activeStep}
            totalItems={steps.length}
            onStepForward={handleGoForward}
            onStepBack={props.goToPreviousStep}
            removeControls={steps[activeStep].removeControls}
            removeSteps={steps[activeStep].removeSteps}
            removeForward={steps[activeStep].removeForward}
            removeBackwards={steps[activeStep].removeBackwards}
            sliceInit={INIT_OF_STEPS}
            sliceEnd={END_OF_STEPS}
          />
        </FormActions>
      )}
    </FormRoot>
  );
};

const MemoizedFormWrapper = React.memo(FormWrapper, (prev, next) => {
  return prev.currentStep === next.currentStep;
});

export default function SimulationForm() {
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
