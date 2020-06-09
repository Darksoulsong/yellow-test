import { breakpoints } from '@components';

export const isFunction = fn => {
  return typeof fn === 'function';
};

export const breakpointValue = (breakpoint, invert) => {
  const bp = breakpoints[breakpoint];

  if (!bp) {
    return null;
  }

  const value = +bp.replace('px', '');
  const mediaQueryValue = invert ? value - 1 : value;
  const rule = invert ? 'maxWidth' : 'minWidth';

  return { [rule]: mediaQueryValue };
};

export function isCorporateEmail(emailAddress) {
  let isCorporate = true;
  const emailDomain = emailAddress.split('@')[1];
  const domainsBlacklist = [
    'yahoo.com',
    'gmail.com',
    'outlook.com',
    'bol.com',
    'uol.com',
    'outlook.com',
    'live.com',
    'globo.com',
  ];

  if (!emailDomain) {
    return false;
  }

  for (let index = 0; index < domainsBlacklist.length; index++) {
    const domain = domainsBlacklist[index];

    if (emailDomain.includes(domain)) {
      isCorporate = false;
      break;
    }
  }

  return isCorporate;
}
