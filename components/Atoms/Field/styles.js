import styled, { css } from 'styled-components';

const getWidth = width => {
  return width === 'flex' ? `flex: 1` : `width: ${width};`;
};

const RoundElementBase = css`
  display: flex;
  align-items: center;
  height: 55px;
  border-radius: 27px;
  padding: 0 20px;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.grayLightish};
  color: ${({ theme }) => theme.colors.grayDarkest};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.black};
  border: 0 none;
  background-color: transparent;
  width: 100%;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayDarkest};
    opacity: 1; /* Firefox */
  }
`;

export const Field = styled.div`
  ${RoundElementBase};

  ${({ width }) => width && getWidth(width)};

  ${({ hasIcon }) => hasIcon && `padding-left: 45px;`};

  svg path {
    stroke: transparent;
  }
`;

export const FieldIcon = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grayDarkest};
  margin-left: -27px;
  margin-right: 8px;
  height: 18px;
`;

export const FieldGroup = styled.div`
  display: flex;

  ${Field} {
    margin: 0 5px;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-left: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-right: 0;
    }
  }
`;
