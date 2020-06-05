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

const FormSteps = ({
  activeStep,
  totalItems,
  onStepForward,
  onStepBack,
  proportion = '30px',
  removeControls = false,
  removeBackwards = false,
  removeSteps = false,
  removeForward = false,
  sliceInit = 0,
  sliceEnd = null,
}) => {
  const items = React.useRef(null);
  items.current = new Array(totalItems).fill('');
  const sliceLimit = sliceEnd || items.current.length;

  return (
    <FormStepsRoot>
      <FormStepButtonHolder
        visible={activeStep > 0 && !removeControls && !removeBackwards}
      >
        <Button
          type="button"
          version="tiny"
          variant="primary"
          onClick={onStepBack}
        >
          <SVG name="arrow-icon2" invert size="8px" />
        </Button>
      </FormStepButtonHolder>

      {!removeSteps && (
        <FormStepsHolder>
          {items.current.slice(sliceInit, sliceLimit).map((item, index) => (
            <FormStep
              proportion={proportion}
              key={uid(index)}
              active={index <= activeStep - sliceInit}
            />
          ))}
        </FormStepsHolder>
      )}

      <FormStepButtonHolder
        visible={
          activeStep + 1 !== totalItems && !removeControls && !removeForward
        }
      >
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
