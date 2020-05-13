import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => `0 ${theme.spaces.xsm}`};
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  user-select: none;
`;
