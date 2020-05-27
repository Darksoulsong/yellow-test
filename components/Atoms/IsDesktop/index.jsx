import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';

const Desktop = ({ children, invert }) => {
  const value = +breakpoints.large.replace('px', '');
  const breakpoint = invert ? value - 1 : value;
  const rule = invert ? 'maxWidth' : 'minWidth';
  const isDesktop = useMediaQuery({ [rule]: breakpoint });
  return isDesktop ? children : null;
};

export default Desktop;
