import styled, { css } from 'styled-components';

const getTabBackgroundColorVariation = (variant, colors) => {
  switch (variant) {
    case 'exec':
      return colors.tabsColor1;

    case 'express':
      return colors.tabsColor2;

    case 'tech':
      return colors.tabsColor3;

    default:
      return colors.tabsColor4;
  }
};

export const TabHead = styled.div`
  text-transform: uppercase;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  cursor: pointer;

  svg {
    margin-top: ${({ theme }) => theme.spaces.xsm};
  }

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform: perspective(25px) rotateX(20deg);
    background-color: ${({ variant, theme }) =>
      getTabBackgroundColorVariation(variant, theme.colors)};
    z-index: -1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 30px;

    svg {
      width: 50%;
      height: 35%;
    }
  }
`;

export const TabContent = styled.div`
  position: relative;
  z-index: 6;
  background-color: ${({ variant, theme }) =>
    getTabBackgroundColorVariation(variant, theme.colors)};
  padding: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.md}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `${theme.spaces.hg} ${theme.spaces.md}`};
  }
`;

export const ProductTabHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ProductTabText = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  hr {
    display: block;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    margin: ${({ theme }) => theme.spaces.sm} 0;
  }

  margin-bottom: ${({ theme }) => theme.spaces.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 800px;
    margin-left: auto;
    margin-right: auto;

    p {
      font-size: 2.8rem;
      line-height: 3.36rem;
    }
  }
`;

export const ProductTabFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ProductIcon = styled.div``;

export const ProductIconLabel = styled.div``;

const getProductIconGroupVariant = variant => {
  switch (variant) {
    case 'exec':
      return css`
        ${ProductIcon} {
          img {
            width: 10vw;
            height: 10vw;
          }
        }

        ${ProductIconLabel} {
          svg {
            width: 17vw;
            height: 10vw;
          }
        }
      `;
    case 'express':
      return css`
        ${ProductIcon} {
          img {
            width: 8vw;
            height: 11vw;
          }
        }

        ${ProductIconLabel} {
          svg {
            width: 28vw;
            height: 10vw;
          }
        }
      `;

    case 'tech':
      return css`
        ${ProductIcon} {
          img {
            width: 10vw;
            height: 10vw;
          }
        }

        ${ProductIconLabel} {
          svg {
            width: 17vw;
            height: 10vw;
          }
        }
      `;

    case 'rpo':
    default:
      return css`
        ${ProductIcon} {
          img {
            width: 10vw;
            height: 10vw;
          }
        }

        ${ProductIconLabel} {
          svg {
            width: 14vw;
            height: 8vw;
          }
        }
      `;
  }
};

export const ProductIconGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.sm};

  ${({ variant }) => getProductIconGroupVariant(variant)}
`;
