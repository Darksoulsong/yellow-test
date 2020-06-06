import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  justify-content: ${({ align = 'space-between' }) => align};
  flex-direction: ${({ direction = 'row' }) => direction};
  margin-bottom: ${({ theme }) => theme.spaces.sm};
`;

export const FormActions = styled(FormControl)`
  margin-top: ${({ theme }) => theme.spaces.sm};
`;
