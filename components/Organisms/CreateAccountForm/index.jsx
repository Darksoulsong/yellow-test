import React from 'react';
import FormikWizard from 'formik-wizard';
import { FormActions, FormSteps } from '@components';
import AccountTypeView from '@components/Organisms/CreateAccountForm/views/AccountType';
import { stepsCandidate, stepsCompany } from './steps';
import { FormRoot, FormHeading, CustomTitle } from './styles';

const getActiveStep = (step, steps) =>
  steps.findIndex(item => item === step || item.id === step);

const FormContainer = ({ children, renderActions, renderHeading }) => {
  return (
    <FormRoot>
      <div>
        {renderHeading || <FormHeading>Criar sua conta</FormHeading>}
        {children}
      </div>

      {renderActions && renderActions()}
    </FormRoot>
  );
};

const FormWrapper = props => {
  const handleGoForward = () => {};

  const renderActions = () => (
    <FormActions>
      <FormSteps
        activeStep={getActiveStep(props.currentStep, props.steps)}
        totalItems={props.steps.length}
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

const MemoizedFormCandidateWrapper = React.memo(FormWrapper, (prev, next) => {
  return prev.currentStep === next.currentStep;
});

const MemoizedFormCompanyWrapper = React.memo(FormWrapper, (prev, next) => {
  return prev.currentStep === next.currentStep;
});

export default function CreateAccountForm({ onNextStep }) {
  const [showForm, setShowForm] = React.useState({ form: null, steps: null });

  const handleSubmit = values => {
    console.log('full values:', values);
    setShowForm({ form: null, steps: null });
  };

  const handleAccountTypeSelect = type => {
    setShowForm({
      form: type,
      steps: type === 'candidate' ? stepsCandidate : stepsCompany,
    });
    onNextStep();
  };

  const onNext = props => {
    const activeStep = getActiveStep(props.step.id, showForm.steps);
    if (activeStep !== -1) {
      onNextStep(activeStep);
      props.push();
    }
  };

  const renderWizard = () => {
    switch (showForm.form) {
      case 'candidate':
        return (
          <FormikWizard
            steps={stepsCandidate}
            onSubmit={handleSubmit}
            render={MemoizedFormCandidateWrapper}
            albusProps={{ onNext }}
          />
        );
      case 'company':
        return (
          <FormikWizard
            steps={stepsCompany}
            onSubmit={handleSubmit}
            render={MemoizedFormCompanyWrapper}
            albusProps={{ onNext }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {!showForm.form && (
        <FormContainer
          renderHeading={
            <CustomTitle>
              CRIAR SUA <strong>CONTA</strong>
            </CustomTitle>
          }
        >
          <AccountTypeView onAccountTypeSelect={handleAccountTypeSelect} />
        </FormContainer>
      )}
      {renderWizard()}
    </>
  );
}
