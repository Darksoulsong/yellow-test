import styled from 'styled-components';

export const ModalRoot = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 0;
  left: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 100%;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 999;
  background-color: ${({ backgroundColor }) => backgroundColor};
  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    margin-top: 30px;
  }
`;

export const ModalCloseButton = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
  font-size: 2.8rem;
  color: ${({ closeColor }) => closeColor};
  &:hover {
    opacity: 0.5;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  height: 32px;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 48px;
  }
`;

export const ModalBody = styled.div``;
