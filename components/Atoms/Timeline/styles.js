import styled from 'styled-components';

export const Item = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  height: 292px;

  &.has-line {
    &:before {
      position: absolute;
      background-color: #a6a8ab;
      content: '';
      height: 100%;
      width: 2px;
      top: -60px;
      left: calc(50% - 1px);
      z-index: 0;
    }
  }

  &.first {
    padding-top: 60px;

    &.has-line {
      &:before {
        top: 0;
      }
    }
  }

  &.last {
    padding-bottom: 60px;

    &.has-line {
      &:before {
        top: -90px;
        height: 120%;
      }
    }
  }

  &[data-aos='animate-line-down'] {
    &.has-line {
      &:before {
        transition: height 0.3s ease-in-out;
        height: 0;
      }
    }

    &.aos-animate {
      &.has-line {
        &:before {
          transition: height 0.3s ease-in-out;
          /* height: 100%; */
          height: 150px;
        }
      }

      &.first.has-line {
        &:before {
          /* height: 50%; */
          height: 120px;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    &.has-line {
      &:before {
        width: 4px;
      }
    }
  }
`;

export const TimelineRoot = styled.div`
  display: grid;
  grid-template-columns: 2fr 150px 2fr;
  transform: scale(0.47) translateY(-575px);
  width: 210%;
  transform-origin: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
    transform: unset;
  }
`;

export const Label = styled.div`
  font-size: 2.2rem;
  font-weight: 300;
  width: 287px;

  ${({ alignRight }) =>
    alignRight
      ? `
        margin-left: auto;
        text-align: right;
      `
      : `
        margin-right: auto;
        text-align: left;
      `}
`;

export const Circle = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.1rem;
  margin: 0 auto;
  z-index: 1;
  letter-spacing: -0.3rem;
  font-weight: 600;

  span {
    margin-top: 0.9rem;
    font-size: 3rem;
  }
`;
