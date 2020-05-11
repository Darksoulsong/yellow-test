import styled, { css } from 'styled-components';

const handleTypeSVG = type => {
  switch (type) {
    case 'curved-line-icon':
      return css`
        &[data-aos='animate-curved-line'] {
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
        &[data-aos='animate-three-line'] {
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

  }
};

export const SVGManipulator = styled.span`
  ${({ type }) => handleTypeSVG(type)}
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const HashtagText = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 6vw;
  font-weight: 300;
  letter-spacing: 2.19px;
`;

export const HashtagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  svg {
    width: 3vw;
    height: auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 2vw;
    }
  }
`;
