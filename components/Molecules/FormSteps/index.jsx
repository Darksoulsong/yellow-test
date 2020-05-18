import React from 'react';
import { SVG, Button } from '@components';
import { isFunction } from '@utils';
import { uid } from 'react-uid';
import {
  FormStepsRoot,
  FormStep,
  FormStepsHolder,
  FormStepButtonHolder,
} from './styles';

const FormSteps = ({ activeStep, totalItems, onStepForward, onStepBack }) => {
  const items = React.useRef(null);

  items.current = new Array(totalItems).fill('');

  return (
    <FormStepsRoot>
      <FormStepButtonHolder visible={activeStep > 0}>
        <Button
          type="button"
          version="tiny"
          variant="primary"
          onClick={onStepBack}
        >
          <SVG name="arrow-icon2" invert size="8px" />
        </Button>
      </FormStepButtonHolder>

      <FormStepsHolder>
        {items.current.map((item, index) => (
          <FormStep key={uid(index)} active={index <= activeStep} />
        ))}
      </FormStepsHolder>

      <FormStepButtonHolder visible={activeStep + 1 !== totalItems}>
        <Button
          type="submit"
          version="tiny"
          variant="primary"
          onClick={e => isFunction(onStepForward) && onStepForward(e)}
        >
          <SVG name="arrow-icon2" size="8px" />
        </Button>
      </FormStepButtonHolder>
    </FormStepsRoot>
  );
};

FormSteps.defaultProps = {
  activeStep: 0,
  totalItems: 0,
};

export default FormSteps;
