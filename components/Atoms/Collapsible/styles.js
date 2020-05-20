import styled, { css } from 'styled-components';

export const CollapsibleRoot = styled.div``;
export const CollapsibleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const CollapsibleHeaderLabel = styled.div``;

export const CollapsibleDefaultToggleIcon = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.5rem;
  height: 10px;
  width: 22px;
  display: block;
  line-height: 0;

  transition: 0.3s ease-in-out;
  transition-property: right, transform;
  transform: rotate(0deg);
  right: 0;

  ${({ active }) =>
    active &&
    css`
      transform: rotate(180deg);
      right: -7px;
    `}
`;
export const CollapsibleBody = styled.div`
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

export const CollapsibleItem = styled.div`
  ${({ active }) =>
    !active
      ? css`
          ${CollapsibleBody} {
            height: 0 !important;
          }
        `
      : css`
          ${CollapsibleDefaultToggleIcon} {
            /* right: 7px; */
          }
        `}
`;
