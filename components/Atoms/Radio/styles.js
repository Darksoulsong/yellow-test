import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spaces.sm};
`;

export const RadioContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-right: ${({ theme }) => theme.spaces.xsm};
  vertical-align: middle;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRadio = styled.div`
  border: ${({ theme, checked = false }) =>
    checked ? `1px solid ${theme.colors.mint}` : '1px solid black'};
  border-radius: 50%;
  display: inline-block;
  height: 20px;
  transition: all 150ms;
  width: 20px;
  background: ${({ theme, checked = false }) =>
    checked ? `${theme.colors.black}` : 'transparent'};
`;
