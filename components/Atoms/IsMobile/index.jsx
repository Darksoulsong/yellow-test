import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';

const Mobile = ({ children }) => {
  const breakpoint = +breakpoints.medium.replace('px', '') - 1;
  const isMobile = useMediaQuery({ maxWidth: breakpoint });
  return isMobile ? children : null;
};

export default Mobile;
