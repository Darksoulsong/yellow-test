import React from 'react';
import { Text } from '@components';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  user-select: none;
  padding: ${({ padding = '12.5px 0' }) => padding};
  align-items: center;
  border-bottom: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.gray}` : 'unset'};
`;

const Circle = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 600;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.yellow : theme.colors.black};
  color: ${({ theme, active }) =>
    active ? theme.colors.black : theme.colors.white};
  margin-right: ${({ theme }) => theme.spaces.sm};
`;

const Label = styled(Text)`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const CircleRow = ({ id, active, text, padding, border, onClick }) => (
  <Row padding={padding} border={border}>
    <div>
      <Circle active={active} onClick={onClick}>
        {id}
      </Circle>
    </div>
    <Label onClick={onClick}>{text}</Label>
  </Row>
);
