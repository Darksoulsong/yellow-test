import React from 'react';
import { useUserData } from '@providers/User';
import { MobileMenuHeading } from '@components/Molecules/MobileMenu/styles';
import {
  FormDropdown,
  Circle,
  UserContainer,
  CustomNavLabelItem,
  ContainerFormDropdown,
} from './styles';

export default function UserLoggedContent({ onClick }) {
  const { userLogged } = useUserData();
  return (
    <>
      <CustomNavLabelItem onClick={onClick}>
        <UserContainer>
          <Circle />
          {userLogged.name}
        </UserContainer>
      </CustomNavLabelItem>
      <FormDropdown>
        <ContainerFormDropdown>
          <MobileMenuHeading>Meu perfil</MobileMenuHeading>
          <MobileMenuHeading>Vagas inscritas</MobileMenuHeading>
          <MobileMenuHeading>Configurações</MobileMenuHeading>
          <MobileMenuHeading>Sair</MobileMenuHeading>
        </ContainerFormDropdown>
      </FormDropdown>
    </>
  );
}
