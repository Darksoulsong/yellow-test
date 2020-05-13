import styled from 'styled-components';

export const CreateAccountFormRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 60px 120px;
  padding: 0 120px 60px;
  width: 600px;
`;

export const FormHeading = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;
