import React from 'react';
import {
  useBackdrop,
  LoginForm,
  ForgotPasswordForm,
  Modal,
  CreateAccountForm,
  SimulationForm,
} from '@components';
import { colors } from '@components/Organisms/Theme/default/colors';
import { useUserData } from '@providers/User';

export const FormModalCtx = React.createContext({});

export const useFormModal = () => React.useContext(FormModalCtx);

export const FormModalProvider = ({ children }) => {
  const {
    isActive: showBackdrop,
    setIsActive: setShowBackdrop,
    setOnClickCallback: setOnBackdropClickCallback,
  } = useBackdrop();
  const { handleUserLogin, data } = useUserData();
  const [showModal, setShowModal] = React.useState('');
  const [closeModalOnClickOut, setCloseModalOnClickOut] = React.useState(true);

  const onCreateAccountFormNextStep = () => {
    setCloseModalOnClickOut(false);
  };

  const handleOnCloseModal = () => {
    setShowModal('');
    setCloseModalOnClickOut(true);
    setShowBackdrop(false);
  };

  const handleLoginToggle = showBackdrop => {
    setShowBackdrop(!showBackdrop);
  };

  const handleForgotPasswordButtonClick = () => {
    setShowModal('forgot');
    handleLoginToggle(showBackdrop);
    setShowBackdrop(false);
  };

  const handleLoginAccountButtonClick = () => {
    setShowModal('');
    handleLoginToggle(showBackdrop);
    setShowBackdrop(false);
  };

  const handleCreateAccountButtonClick = () => {
    setShowModal('create');
    handleLoginToggle(showBackdrop);
    setShowBackdrop(false);
  };

  const renderModal = React.useCallback(() => {
    if (showModal) {
      setShowBackdrop(true);
    }

    switch (showModal) {
      case 'create':
        return <CreateAccountForm onNextStep={onCreateAccountFormNextStep} />;
      case 'forgot':
        return (
          <ForgotPasswordForm
            onForgotPasswordOkButtonClick={handleOnCloseModal}
          />
        );
      case 'login':
        return (
          <LoginForm
            loading={data.loading}
            onCreateAccountButtonClick={handleCreateAccountButtonClick}
            onForgotPasswordButtonClick={handleForgotPasswordButtonClick}
            onLoginButtonClick={({ email, password }) => {
              handleUserLogin({ email, password });
              handleLoginAccountButtonClick();
              // Temporary code
            }}
          />
        );
      case 'simulate':
        return <SimulationForm />;
      default:
        return null;
    }
  }, [showModal]);

  const openFormModal = React.useCallback(
    type => {
      setShowModal(type);
    },
    [setShowModal]
  );

  const closeFormModal = React.useCallback(() => {
    setShowModal('');
  }, [setShowModal]);

  const valueProvider = {
    openFormModal,
    closeFormModal,
    activeFormModal: showModal,
  };

  React.useEffect(() => {
    setOnBackdropClickCallback({
      onCloseModal: () => {
        setShowBackdrop(false);
      },
    });
  }, [showModal, showBackdrop]);

  return (
    <FormModalCtx.Provider value={valueProvider}>
      <>
        {children}

        <Modal
          show={!!showModal}
          displayHeader
          closeOnClickOut={closeModalOnClickOut}
          onCloseModal={handleOnCloseModal}
          backgroundColor={
            showModal !== 'login' ? colors.grayLightest : colors.grayDarker
          }
          closeColor={showModal !== 'login' ? '' : colors.white}
        >
          {renderModal()}
        </Modal>
      </>
    </FormModalCtx.Provider>
  );
};
