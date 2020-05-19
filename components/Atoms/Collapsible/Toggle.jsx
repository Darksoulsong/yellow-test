import React from 'react';
import { useCollapsible } from './index';
import {
  CollapsibleDefaultToggleIcon,
  CollapsibleHeader,
  CollapsibleHeaderIconHolder,
  CollapsibleHeaderLabel,
} from './styles';

export default function Toggle({ children, itemIndex, renderIcon }) {
  const { activeItem, setActiveItem } = useCollapsible();
  const icon =
    typeof renderIcon === 'function' ? (
      renderIcon()
    ) : (
      <CollapsibleDefaultToggleIcon className="collapsible-toggle-icon">
        ⌄
      </CollapsibleDefaultToggleIcon>
    );

  const handleClick = React.useCallback(() => {
    setActiveItem(activeItem === itemIndex ? null : itemIndex);
  }, [itemIndex, activeItem]);

  return (
    <CollapsibleHeader onClick={handleClick}>
      <CollapsibleHeaderLabel>{children}</CollapsibleHeaderLabel>
      <CollapsibleHeaderIconHolder active={activeItem === itemIndex}>
        {icon}
      </CollapsibleHeaderIconHolder>
    </CollapsibleHeader>
  );
}
