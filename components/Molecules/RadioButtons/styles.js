import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ margin, theme }) =>
    margin || `${theme.spaces.md} 0 ${theme.spaces.md} 0`};
`;
