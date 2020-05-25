import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 60px;
  /* height: 220px; */

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 200px;
    height: 220px;
  }

  .hover-icon {
    position: absolute;
    width: 100%;
    top: -30px;

    path {
      stroke: transparent;
    }
  }

  &.product-icon,
  &.exec-icon,
  &.express-icon,
  &.tech-icon,
  &.rpo-icon {
    position: relative;
    width: 100%;
  }

  &.product-icon {
    position: relative;
  }

  &.exec-icon {
    .product-icon {
      height: 170px;
    }
  }

  &.express-icon {
    .product-icon {
      height: 190px;
    }
  }

  &.tech-icon {
    .product-icon {
      height: 190px;
    }
  }

  &.rpo-icon {
    .product-icon {
      height: 160px;
    }
  }
`;
