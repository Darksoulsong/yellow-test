import matter from 'gray-matter';

export const getDocument = value => matter(value);

export const contextIterator = callback => {
  let data = [];
  const context = readPostsDirectory();
  const keys = context.keys();
  const values = keys.map(context);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const document = getDocument(values[index].default);
    const result = callback(document, index, data, key);
    const shouldBreak = result === true;

    if (shouldBreak === true) {
      break;
    }

    if (result) {
      data = data.concat(result);
    }
  }

  return data;
};

export const readPostsDirectory = () => {
  return require.context('../../posts', true, /\.md$/);
};

export const getFilename = key => key.replace(/^.*[\\/]/, '').slice(0, -3);
