import React from 'react';
import {
  CollapsibleRoot,
  CollapsibleHeader,
  CollapsibleBody,
  CollapsibleHeaderIconHolder,
  CollapsibleHeaderLabel,
} from './styles';

const Collapsible = ({ defaultActiveKey, children }) => {
  // console.log();
  return <CollapsibleRoot>{children}</CollapsibleRoot>;
};

Collapsible.Header = ({ children, eventKey, renderIcon }) => {
  const icon = typeof renderIcon === 'function' ? renderIcon() : '&#x2304;';
  return (
    <CollapsibleHeader>
      <CollapsibleHeaderLabel>{children}</CollapsibleHeaderLabel>
      <CollapsibleHeaderIconHolder>{icon}</CollapsibleHeaderIconHolder>
    </CollapsibleHeader>
  );
};

Collapsible.Header.displayName = 'Collapsible.Header';

Collapsible.Body = ({ children }) => {
  return <CollapsibleBody>{children}</CollapsibleBody>;
};

Collapsible.Body.displayName = 'Collapsible.Body';

Collapsible.defaultProps = {
  defaultActiveKey: 0,
};

export default Collapsible;
