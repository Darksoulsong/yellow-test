import {
  contextIterator,
  getDocument,
  getFilename,
  readPostsDirectory,
} from './utils';

export const getCategoryNameByCategorySlug = slug => {
  let name = '';

  contextIterator(document => {
    const { categorySlug, category } = document.data;

    if (slug === categorySlug) {
      name = category;

      return true;
    }
  });

  return name;
};

export const getBlogIndexData = () => {
  const posts = [];
  const categories = [];
  const featuredList = [];

  contextIterator(document => {
    const {
      title,
      author,
      featured,
      category,
      publishDate,
      image,
      slug,
      categorySlug,
    } = document.data;

    const post = {
      title,
      author,
      featured,
      category,
      publishDate,
      image,
      markdownBody: document.content,
      slug,
    };

    posts.push(post);

    const hasCategory = categories.find(item => item.category === category);

    if (!hasCategory) {
      categories.push({
        category,
        categorySlug,
      });
    }

    if (document.data.featured) {
      featuredList.push(post);
    }
  });

  return {
    posts,
    categories,
    featuredList,
  };
};

export const getPost = async (slug, ctx) => {
  const context = ctx || readPostsDirectory();
  const filename = resolveFileNameBySlug(slug, context);
  const markdownFile = await import(`../../posts/${filename}.md`);
  const document = getDocument(markdownFile.default);

  return {
    ...document.data,
    markdownBody: document.content,
  };
};

export const getPosts = () => {
  return contextIterator(document => {
    const {
      title,
      author,
      featured,
      category,
      publishDate,
      image,
      slug,
      categorySlug,
    } = document.data;

    return {
      title,
      author,
      featured,
      category,
      publishDate,
      image,
      slug,
      categorySlug,
    };
  });
};

export const filterPostsByCategory = categorySlug =>
  getPosts().filter(post => categorySlug === post.categorySlug, []);

export const getCategories = () => {
  return contextIterator((document, index, array) => {
    const { categorySlug, category } = document.data;

    if (!array.find(item => item.category === category)) {
      return { category, categorySlug };
    }
  });
};

export const getSlugs = () => contextIterator(document => document.data.slug);

export const resolveFileNameBySlug = slug => {
  let filename = '';

  contextIterator((document, index, array, documentName) => {
    if (document.data.slug === slug) {
      filename = getFilename(documentName);
      return true;
    }
  });

  return filename;
};
