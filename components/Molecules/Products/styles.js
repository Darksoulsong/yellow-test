import styled from 'styled-components';

export const Root = styled.div`
  /* align-items: flex-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 16px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
    grid-template-columns: repeat(4, 1fr);
  } */
  display: flex;
  
`;

export const Description = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  width: 100%;
  padding: 0 50px;
  padding-top: 160px;
  opacity: 1;

  &:before {
    content: '';
    position: absolute;
    top: 35px;
    left: calc(50% - 2px);
    height: 100px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 100%; */

  .hover-icon {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  ${Description} {
    opacity: 0;
  }

  &:hover {
    ${Description} {
      opacity: 1;
    }

    .hover-icon {
      opacity: 1;
    }
  }
`;
