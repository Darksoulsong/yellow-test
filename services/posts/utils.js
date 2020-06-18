import matter from 'gray-matter';
import { splitArrayIntoChunks } from '@utils';
import { PAGINATION_ITEMS_PER_PAGE } from '@config';

export const getDocument = value => matter(value);

export const dateFormat = date => new Date(date).toDateString();

export const readDirectory = type => {
  const context =
    type === 'posts'
      ? require.context('../../posts', true, /\.md$/)
      : require.context('../../categories', true, /\.md$/);

  const keys = context.keys();
  const values = keys.map(context);

  return { context, keys, values };
};

export const contextIterator = (type, callback) => {
  let data = [];

  const { keys, values } = readDirectory(type);

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

export const slugify = key => key.replace(/^.*[\\/]/, '').slice(0, -3);

export const getPaginatedPosts = (items, page = 1) => {
  return splitArrayIntoChunks(items, PAGINATION_ITEMS_PER_PAGE)[page - 1] || [];
};

export const createBlogPaginationPaths = (path, length = 100) => {
  return Array.from({ length }).map((_, index) => {
    return path + (index + 1);
  });
};

export const sortPostsByPublishDateDesc = (a, b) =>
  new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
