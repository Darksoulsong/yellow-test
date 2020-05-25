import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';

const Tablet = ({ children, invert }) => {
  const value = +breakpoints.medium.replace('px', '');
  const breakpoint = invert ? value - 1 : value;
  const rule = invert ? 'maxWidth' : 'minWidth';
  const isTablet = useMediaQuery({ [rule]: breakpoint });
  return isTablet ? children : null;
};

export default Tablet;
