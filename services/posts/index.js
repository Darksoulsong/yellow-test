export { createBlogPaginationPaths } from './utils';
import { contextIterator, getFilename, getPaginatedPosts } from './utils';

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

export const handleBlogIndexPage = (page = 1) => {
  let posts = [];
  let totalPosts = 0;
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

  totalPosts = posts.length;

  posts = getPaginatedPosts(posts, page);

  return {
    posts,
    totalPosts,
    categories,
    featuredList,
  };
};

export const handleBlogCategoriesPage = (categorySlugParam, page = 1) => {
  let posts = [];
  let totalPosts = 0;
  const categories = [];

  contextIterator(document => {
    const post = {
      ...document.data,
      markdownBody: document.content,
    };

    if (categorySlugParam === post.categorySlug) {
      posts.push(post);
    }

    const hasCategory = categories.find(
      item => item.category === post.category
    );

    if (!hasCategory) {
      categories.push({
        category: post.category,
        categorySlug: post.categorySlug,
      });
    }
  });

  totalPosts = posts.length;

  posts = getPaginatedPosts(posts, page);

  return {
    posts,
    totalPosts,
    categories,
  };
};

export const handleBlogSingle = async slug => {
  let posts = getPosts();
  const post = posts.find(item => item.slug === slug);

  posts = posts.filter(item => item.slug !== post.slug);

  return {
    ...post,
    posts,
  };
};

export const getPosts = () => {
  return contextIterator(document => {
    return {
      ...document.data,
      markdownBody: document.content,
    };
  });
};

export const filterPostsByCategory = categorySlug =>
  getPosts().filter(post => categorySlug === post.categorySlug, []);

export const getCategories = () => {
  return contextIterator((document, _, array) => {
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
