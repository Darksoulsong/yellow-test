import styled from 'styled-components';

export const ProductsCarouselRoot = styled.div`
  height: 310px;
  width: 58%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 25px;

  .slider-control-left,
  .slider-control-right {
    path {
      stroke: ${({ theme }) => theme.colors.white};
      stroke-width: 2px;
    }
  }

  .exec-icon,
  .express-icon,
  .tech-icon,
  .rpo-icon {
    .product-icon {
      height: 115px;
    }
  }

  .product-description {
    padding-top: 70px;
    &:before {
      top: 20px;
    }
  }

  /* .exec-icon .product-icon {
    height: 115px;
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    /* padding-top: 140px;
           font-size: 2rem;

           &:before {
             top: 44px;
             height: 72px;
           } */
  }
`;
