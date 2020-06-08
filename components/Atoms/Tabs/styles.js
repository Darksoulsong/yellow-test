import styled from 'styled-components';

export const TabsRoot = styled.div``;

export const TabsHeader = styled.div`
  display: flex;
  width: 92%;
  margin: 0 auto;
`;

export const TabsHeaderItem = styled.div`
  position: relative;
  flex: 1;
  /* z-index: ${({ active, zIndex }) => (active ? 1 : zIndex)}; */
  z-index: ${({ zIndex }) => zIndex};
`;

export const TabsContent = styled.div``;

export const TabsItem = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
