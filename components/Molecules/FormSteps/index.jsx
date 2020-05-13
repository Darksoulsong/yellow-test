import React from 'react';
import { SVG, Button } from '@components';
import { uid } from 'react-uid';
import {
  FormStepsRoot,
  FormStep,
  FormStepsHolder,
  FormStepButtonHolder,
} from './styles';

export default function FormSteps({ activeStep, totalItems, onStepChange }) {
  // const items = new Array(totalItems).fill('');
  const items = React.useRef(null);
  const [activeStepIndex, setActiveStepIndex] = React.useState();
  items.current = new Array(totalItems).fill('');

  const handleClick = React.useCallback(
    step => {
      const newIndex = activeStepIndex + step;
      setActiveStepIndex(newIndex);
      onStepChange(newIndex);
    },
    [activeStepIndex]
  );

  React.useEffect(() => {
    setActiveStepIndex(activeStep);
  }, []);

  return (
    <FormStepsRoot>
      <FormStepButtonHolder visible={activeStepIndex > 1}>
        <Button
          type="button"
          version="tiny"
          variant="primary"
          onClick={() => handleClick(-1)}
        >
          <SVG name="arrow-icon2" invert size="8px" />
        </Button>
      </FormStepButtonHolder>

      <FormStepsHolder>
        {items.current.map((item, index) => (
          <FormStep key={uid(index)} active={index <= activeStepIndex - 1} />
        ))}
      </FormStepsHolder>

      <FormStepButtonHolder visible={activeStepIndex !== totalItems}>
        <Button
          type="button"
          version="tiny"
          variant="primary"
          onClick={() => handleClick(1)}
        >
          <SVG name="arrow-icon2" size="8px" />
        </Button>
      </FormStepButtonHolder>
    </FormStepsRoot>
  );
}

FormSteps.defaultProps = {
  activeStep: 0,
  totalItems: 0,
  onStepChange: () => null,
};
