import styled from 'styled-components';

export const MediumTitle = styled.h2`
  font-size: 3rem;
  font-weight: ${({ weight = '300' }) => weight};
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  text-align: ${({ align = 'left' }) => align};
`;

export const Text = styled.p`
  font-size: 1.75rem;
  font-weight: ${({ weight = '300' }) => weight};
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  text-align: ${({ align = 'left' }) => align};
`;

export const SmallText = styled.h2`
  font-size: 1.25rem;
`;
