import React from 'react';
import { uid } from 'react-uid';
import { CircleRow } from '@components';
import { FormHeading } from '../styles';

export const DefaultCircledRowModal = ({ title, list, active, setActive }) => (
  <>
    <FormHeading>{title}</FormHeading>
    <>
      {list.map((item, key) => (
        <CircleRow
          key={uid(item)}
          id={key + 1}
          active={active === item.text}
          text={item.text}
          border={list.length - 1 !== key}
          onClick={() => setActive(item.text)}
        />
      ))}
    </>
  </>
);
