import styled from 'styled-components';

export const Item = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  height: 200px;
  padding: 30px 0;

  &.has-line {
    &:before {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.black};
      content: '';
      height: 100%;
      width: 1px;
      top: 0;
      left: calc(50% - 1px);
      z-index: 0;
    }
  }

  &.first {
    padding-top: 60px;
  }

  &.last {
    padding-bottom: 60px;
  }
`;

export const Root = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.7fr 2fr;
`;

export const Label = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  width: 25rem;

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
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin: 0 auto;
  z-index: 1;

  span {
    margin-top: 0.6rem;
    font-size: 2rem;
  }
`;
