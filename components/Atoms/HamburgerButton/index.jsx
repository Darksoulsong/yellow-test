import React from 'react';
import { Button } from '@components';
import { HamburgerButtonRoot, HamburgerButtonIcon } from './styles';

export default function HamburgerButton({ onClick, active, ...rest }) {
  const [isActive, setIsActive] = React.useState(active);
  const onButtonClick = React.useCallback(
    e => {
      setIsActive(!isActive);
      onClick(e, !isActive);
    },
    [isActive]
  );

  React.useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <Button type="button" onClick={e => onButtonClick(e)} version="unstyled">
      <HamburgerButtonRoot open={isActive}>
        <HamburgerButtonIcon open={isActive} {...rest} />
      </HamburgerButtonRoot>
    </Button>
  );
}

HamburgerButton.defaultProps = {
  onClick: () => {},
  invertColor: false,
};
