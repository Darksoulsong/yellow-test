import matter from 'gray-matter';
import { splitArrayIntoChunks } from '@utils';
import { PAGINATION_ITEMS_PER_PAGE } from '@config';

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

export const getPaginatedPosts = (items, page = 1) => {
  return splitArrayIntoChunks(items, PAGINATION_ITEMS_PER_PAGE)[page - 1] || [];
};

export const createBlogPaginationPaths = (path, length = 100) => {
  return Array.from({ length }).map((item, index) => {
    return path + (index + 1);
  });
};

export const sortPostsByPublishDateDesc = (a, b) =>
  new Date(b.publishDate).getTime() - new Date(a.publishDate);
