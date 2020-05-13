import React from 'react';
import { Button } from '@components';
import { HamburgerButtonRoot, HamburgerButtonIcon } from './styles';

export default function HamburgerButton({ onClick, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const onButtonClick = React.useCallback(
    e => {
      setOpen(!open);
      onClick(e, !open);
    },
    [open]
  );

  return (
    <Button type="button" onClick={e => onButtonClick(e)} version="unstyled">
      <HamburgerButtonRoot>
        <HamburgerButtonIcon open={open} {...rest} />
      </HamburgerButtonRoot>
    </Button>
  );
}

HamburgerButton.defaultProps = {
  onClick: () => {},
  invertColor: false,
};
