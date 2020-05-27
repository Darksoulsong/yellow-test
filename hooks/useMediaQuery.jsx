import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';

const handleBreakpoints = () => {
  return Object.keys(breakpoints).reduce((acc, curr) => {
    const obj = acc;

    obj[curr] = +breakpoints[curr].replace('px', '');

    return obj;
  }, {});
};

export default function useMediaQueryHook() {
  const enhancedBreakpoints = handleBreakpoints();

  const isTablet = useMediaQuery({ minWidth: enhancedBreakpoints.medium });
  const isDesktop = useMediaQuery({ minWidth: enhancedBreakpoints.large });
  const isLargeDesktop = useMediaQuery({
    minWidth: enhancedBreakpoints.larger,
  });
  const isMobile = useMediaQuery({ maxWidth: enhancedBreakpoints.medium });

  return { isTablet, isDesktop, isLargeDesktop, isMobile };
}
