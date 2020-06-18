import React from 'react';
import { useCollapsible } from './index';
import {
  CollapsibleDefaultToggleIcon,
  CollapsibleHeader,
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

  const handleClick = () => {
    setActiveItem(isActive ? null : itemIndex);
  };

  return (
    <CollapsibleHeader onClick={handleClick}>
      <CollapsibleHeaderLabel>{children}</CollapsibleHeaderLabel>
      {icon}
    </CollapsibleHeader>
  );
}
