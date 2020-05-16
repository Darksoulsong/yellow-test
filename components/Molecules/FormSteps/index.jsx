import React from 'react';
import { SVG, Button } from '@components';
import { uid } from 'react-uid';
import {
  FormStepsRoot,
  FormStep,
  FormStepsHolder,
  FormStepButtonHolder,
} from './styles';

export default function FormSteps({
  activeStep,
  totalItems,
  onStepChange,
  onPrevButtonClick,
  onNextButtonClick,
}) {
  const items = React.useRef(null);
  const [activeStepIndex, setActiveStepIndex] = React.useState();
  items.current = new Array(totalItems).fill('');

  const handleClick = index => {
    const goingForward = index > 0;
    const newIndex = activeStepIndex + index;

    if (newIndex > totalItems) {
      return;
    }

    if (typeof onPrevButtonClick === 'function' && !goingForward) {
      onPrevButtonClick(newIndex);
    }

    if (typeof onNextButtonClick === 'function' && goingForward) {
      onNextButtonClick(newIndex);
    }

    if (!onStepChange) {
      setActiveStepIndex(newIndex);
      return;
    }

    if (typeof onStepChange === 'function') {
      const shouldContinue = onStepChange(newIndex);

      if (shouldContinue) {
        setActiveStepIndex(newIndex);
      }
    }
  };

  React.useEffect(() => {
    setActiveStepIndex(activeStep);
  }, []);

  return (
    <FormStepsRoot>
      <FormStepButtonHolder visible={activeStepIndex > 0}>
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
          <FormStep key={uid(index)} active={index <= activeStepIndex} />
        ))}
      </FormStepsHolder>

      <FormStepButtonHolder visible={activeStepIndex + 1 !== totalItems}>
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
};
