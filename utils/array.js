export const splitArrayIntoChunks = (array, size) => {
  const results = [];

  while (array.length) {
    results.push(array.splice(0, size));
  }

  return results;
};
