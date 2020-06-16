import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => `0 ${theme.spaces.xsm}`};
  background: ${({ theme, active }) =>
    active ? theme.colors.yellow : theme.colors.white};
  color: ${({ theme, active }) =>
    active ? theme.colors.black : theme.colors.yellow};
  font-weight: 700;
  user-select: none;
  border: 1px solid ${({ theme }) => `${theme.colors.yellow}`};
`;
