import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  z-index: 1;
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 12px;
  height: 12px;
  opacity: 0;
  position: relative;
  z-index: 0;

  &:checked + label:before {
    content: '\\2714';
    position: absolute;
    top: -4px;
    left: 0px;
    width: 12px;
    height: 12px;
    font-size: 1.5rem;
  }
`;

export const CheckboxRoot = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
`;
