/**
 * @param {string | string[]} props
 * @param {{[x: string]: any}} from
 */
export const objectPick = (props, from) => {
  if (!props || !from) {
    return {};
  }

  const propsList = typeof props === 'string' ? [props] : props;

  return propsList.reduce((acc, curr) => {
    if (curr in from) {
      acc[curr] = from[curr];
    }

    return acc;
  }, {});
};

export const objectIsEmpty = object => {
  return Object.keys(object).length === 0;
};
