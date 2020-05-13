import styled from 'styled-components';

export const SVGRoot = styled.div`
  /* display: inline-flex; */

  svg {
    ${({ size }) => size && `width: ${size}; height: auto;`}
    ${({ invert }) => invert && `transform: rotate(-180deg)`};
  }
`;
