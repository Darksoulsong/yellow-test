import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  justify-content: ${({ align = 'space-between' }) => align};
  margin-bottom: 17px;
`;

export const FormActions = styled(FormControl)`
  margin-top: 33px;
`;
