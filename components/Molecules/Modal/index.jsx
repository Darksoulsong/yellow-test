import React from 'react';
import ReactDOM from 'react-dom';
import { useBackdrop } from '@components';
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
  const {
    setIsActive: setIsBackdropActive,
    setAnimated,
    animated,
  } = useBackdrop();
  const [active, setActive] = React.useState();
  const [container, setContainer] = React.useState(null);

  const handleBackdropClick = React.useCallback(() => {
    if (closeOnClickOut) {
      setActive(false);
      onCloseModal();
    }
  }, [active]);

  const handleModalContainerClick = React.useCallback(e => {
    e.stopPropagation();
  }, []);

  const handleModalCloseButtonClick = React.useCallback(() => {
    setActive(false);
    onCloseModal();
    setIsBackdropActive(false);
  }, [active]);

  const element = active ? (
    <ModalRoot onClick={handleBackdropClick}>
      <ModalContainer onClick={handleModalContainerClick}>
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
    </ModalRoot>
  ) : (
    ''
  );

  React.useEffect(() => {
    setActive(show);

    if (show && typeof window !== 'undefined') {
      setIsBackdropActive(show);
      setAnimated(true);

      if (!container) {
        const rootContainer = document.createElement('div');
        const parentElem = document.querySelector('#__next');
        parentElem.appendChild(rootContainer);
        setContainer(rootContainer);
      }
    } else {
      if (container) {
        container.parentNode.removeChild(container);
        setContainer(null);
        setAnimated(false);
      }
    }

    return () => {
      if (!container) {
        setAnimated(false);
      }
    };
  }, [show, animated]);

  return container ? ReactDOM.createPortal(element, container) : null;
}

Modal.defaultProps = {
  show: false,
  closeOnClickOut: false,
};
