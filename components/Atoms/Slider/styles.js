import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  display: flex;
`;

export const ControlLeft = styled.button`
  position: absolute;
  width: 20px;
  left: -75px;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  top: calc(50% - 44px);

  svg {
    fill: ${({ theme }) => theme.colors.black};
    width: 90%;
  }
`;

export const ControlRight = styled(ControlLeft)`
  left: unset;
  right: -75px;
  transform: rotate(180deg);
`;

export const Content = styled.div``;
