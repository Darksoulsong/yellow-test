import styled from 'styled-components';

export const ModalRoot = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 999;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-top: 30px;
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
  height: 64px;
  align-items: center;
`;

export const ModalBody = styled.div``;
