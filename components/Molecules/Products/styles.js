import styled from 'styled-components';

export const Description = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  width: 100%;
  padding: 0 8px;
  padding-top: 140px;
  opacity: 1;
  white-space: pre-wrap;

  &:before {
    content: '';
    position: absolute;
    top: 44px;
    left: calc(50% - 2px);
    height: 72px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProductsActions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  button > span {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
      text-decoration: none;
    }
  }
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
