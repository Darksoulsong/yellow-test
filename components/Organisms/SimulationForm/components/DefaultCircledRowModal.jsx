import React, { useState } from 'react';
import { uid } from 'react-uid';
import { CircleRow } from '@components';
import { FormHeading } from '../styles';

export const DefaultCircledRowModal = ({ title, list }) => {
  const [active, setActive] = useState(-1);
  return (
    <>
      <FormHeading>{title}</FormHeading>
      <>
        {list.map((item, key) => (
          <CircleRow
            key={uid(item)}
            id={key + 1}
            active={active === key}
            text={item.text}
            border={list.length - 1 !== key}
            onClick={() => setActive(key)}
          />
        ))}
      </>
    </>
  );
};
