import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';

const LargeDesktop = ({ children, invert }) => {
  const value = +breakpoints.larger.replace('px', '');
  const breakpoint = invert ? value - 1 : value;
  const rule = invert ? 'maxWidth' : 'minWidth';
  const isLargeDesktop = useMediaQuery({ [rule]: breakpoint });
  return isLargeDesktop ? children : null;

  // const breakpoint = +breakpoints.larger.replace('px', '');
  // const isLargeDesktop = useMediaQuery({ minWidth: breakpoint });
  // return isLargeDesktop ? children : null;
};

export default LargeDesktop;
