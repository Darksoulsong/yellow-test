import styled, { css } from 'styled-components';

const handleTypeSVG = type => {
  switch (type) {
    case 'curved-line-icon':
      return css`
        &[data-aos='curved-line-icon'] {
          path {
            transition: stroke-dashoffset 1s ease-in-out;
            stroke: ${({ theme }) => theme.colors.black};
            stroke-dasharray: 1640;
            stroke-dashoffset: 1640;
          }

          &.aos-animate {
            path {
              stroke-dashoffset: 950;
            }
          }
        }
        text-align: center;
        svg {
          width: 40vw;
          height: auto;
        }
      `;

    case 'three-line-icon':
      return css`
        &[data-aos='three-line-icon'] {
          path {
            transition: stroke-dashoffset 1s ease-in-out;
            stroke: ${({ theme }) => theme.colors.black};
            stroke-dasharray: 57;
            stroke-dashoffset: 57;
          }
          svg {
            width: 2vw;
            height: auto;
          }

          &.aos-animate {
            path {
              stroke-dashoffset: 49;
            }
          }
        }
      `;
    case 'three-line-icon-yellow':
      return css`
        &[data-aos='three-line-icon-yellow'] {
          path {
            transition: stroke-dashoffset 1s ease-in-out;
            stroke: ${({ theme }) => theme.colors.yellow};
            stroke-dasharray: 57;
            stroke-dashoffset: 57;
          }
          svg {
            width: 2vw;
            height: auto;
          }

          &.aos-animate {
            path {
              stroke-dashoffset: 49;
            }
          }
        }
      `;
  }
};

export const SVGManipulator = styled.span`
  ${({ type }) => handleTypeSVG(type)}
`;
