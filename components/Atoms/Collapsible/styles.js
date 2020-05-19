import styled from 'styled-components';

export const CollapsibleRoot = styled.div``;
export const CollapsibleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const CollapsibleHeaderLabel = styled.div``;
export const CollapsibleHeaderIconHolder = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);

  ${({ active }) => active && `transform: rotate(180deg);`}
`;
export const CollapsibleDefaultToggleIcon = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.5rem;
  height: 10px;
  width: 22px;
  display: block;
  line-height: 0;
`;
export const CollapsibleBody = styled.div`
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

export const CollapsibleItem = styled.div`
  ${({ active }) =>
    !active
      ? `
    ${CollapsibleBody} {
      height: 0 !important;
    }
  `
      : `
    ${CollapsibleDefaultToggleIcon} {
        right: 7px;
    }
  `}
`;
