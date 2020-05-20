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
  const isActive = activeItem === itemIndex;
  const icon =
    typeof renderIcon === 'function' ? (
      renderIcon(isActive)
    ) : (
      <CollapsibleDefaultToggleIcon
        className="collapsible-toggle-icon"
        active={activeItem === itemIndex}
      >
        ⌄
      </CollapsibleDefaultToggleIcon>
    );

  const handleClick = React.useCallback(() => {
    setActiveItem(isActive ? null : itemIndex);
  }, [itemIndex, activeItem]);

  return (
    <CollapsibleHeader onClick={handleClick}>
      <CollapsibleHeaderLabel>{children}</CollapsibleHeaderLabel>
      {icon}
    </CollapsibleHeader>
  );
}
