import styled from 'styled-components';

export const Root = styled.div`
  svg {
    width: ${({ width = 'auto' }) => width};
    height: ${({ height = 'auto' }) => height};
  }
`;
