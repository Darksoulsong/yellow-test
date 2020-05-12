import React from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from '@components';
import {
  ModalRoot,
  ModalContainer,
  ModalHead,
  ModalBody,
  ModalCloseButton,
} from './styles';

export default function Modal({
  show,
  displayHeader,
  closeOnClickOut,
  children,
  onCloseModal,
}) {
  const [active, setActive] = React.useState();
  let container;

  if (typeof window !== 'undefined') {
    const rootContainer = document.createElement('div');
    const parentElem = document.querySelector('#__next');
    parentElem.appendChild(rootContainer);
    container = rootContainer;
  }

  const handleBackdropClick = React.useCallback(() => {
    if (closeOnClickOut) {
      setActive(false);

      onCloseModal();
    }
  }, [active]);

  const handleModalCloseButtonClick = React.useCallback(() => {
    setActive(false);
    onCloseModal();
  }, [active]);

  const element = active ? (
    <ModalRoot>
      <ModalContainer>
        {displayHeader && (
          <ModalHead>
            <span />
            <ModalCloseButton onClick={handleModalCloseButtonClick}>
              &times;
            </ModalCloseButton>
          </ModalHead>
        )}

        <ModalBody>{children}</ModalBody>
      </ModalContainer>

      <Backdrop active={active} zIndex={998} onClick={handleBackdropClick} />
    </ModalRoot>
  ) : (
    ''
  );

  React.useEffect(() => {
    setActive(show);
  }, [show]);

  return container ? ReactDOM.createPortal(element, container) : null;
}

Modal.defaultProps = {
  show: false,
  closeOnClickOut: false,
};
