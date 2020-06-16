import styled from 'styled-components';

export const SuscribeSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ padding = '0' }) => padding};
`;

export const CustomField = styled.input`
  height: 45px;
  background: ${({ theme }) => theme.colors.grayLight};
  border: 0 none;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 300;
`;

export const SuscribeHolder = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spaces.md};
  * {
    border-radius: 0;
  }
  input {
    height: 50px;
    max-width: 200px;
    padding: ${({ theme }) => theme.spaces.sm};
    border-top-left-radius: 9.5px;
    border-bottom-left-radius: 9.5px;
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
      max-width: 300px;
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.black};
    border-top-right-radius: 9.5px;
    border-bottom-right-radius: 9.5px;
    font-weight: 300;
    padding: ${({ theme }) => theme.spaces.sm};
    font-size: 1.75rem;
    text-transform: lowercase;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
