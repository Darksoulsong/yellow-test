import React from 'react';
import FormikWizard from 'formik-wizard';
import { FormActions, FormSteps } from '@components';
import AccountTypeView from '@components/Organisms/CreateAccountForm/views/AccountType';
import steps from './steps';
import { FormRoot, FormHeading } from './styles';

const getActiveStep = step => {
  return steps.findIndex(item => {
    return item.id === step;
  });
};

const FormContainer = ({ children, renderActions }) => {
  return (
    <FormRoot>
      <FormHeading>Criar sua conta</FormHeading>

      {children}

      {renderActions && renderActions()}
    </FormRoot>
  );
};

const FormWrapper = props => {
  const handleGoForward = () => {};

  const renderActions = () => (
    <FormActions>
      <FormSteps
        activeStep={getActiveStep(props.currentStep)}
        totalItems={steps.length}
        onStepForward={handleGoForward}
        onStepBack={props.goToPreviousStep}
      />
    </FormActions>
  );

  return (
    <FormContainer renderActions={renderActions}>
      {props.children}
    </FormContainer>
  );
};

const MemoizedFormWrapper = React.memo(FormWrapper, (prev, next) => {
  return prev.currentStep === next.currentStep;
});

export default function CreateAccountForm({ onNextStep }) {
  const [showForm, setShowForm] = React.useState(false);

  const handleSubmit = React.useCallback(values => {
    console.log('full values:', values);
  }, []);

  const handleAccountTypeSelect = React.useCallback(() => {
    setShowForm(true);
    onNextStep();
  }, [setShowForm]);

  const onNext = props => {
    const activeStep = getActiveStep(props.step.id);

    if (activeStep !== -1) {
      onNextStep(activeStep);
      props.push();
    }
  };

  return (
    <>
      {!showForm && (
        <FormContainer>
          <AccountTypeView onAccountTypeSelect={handleAccountTypeSelect} />
        </FormContainer>
      )}

      {showForm && (
        <FormikWizard
          steps={steps}
          onSubmit={handleSubmit}
          render={MemoizedFormWrapper}
          albusProps={{ onNext }}
        />
      )}
    </>
  );
}
