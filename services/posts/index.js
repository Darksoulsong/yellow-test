export { createBlogPaginationPaths } from './utils';
import {
  contextIterator,
  getFilename,
  getPaginatedPosts,
  sortPostsByPublishDateDesc,
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

export const handleBlogIndexPage = (page = 1, categorySlugParam) => {
  let posts = [];
  let totalPosts = 0;
  const categories = [];
  const features = [];
  const highlights = [];
  const isCategoriesPage = !!categorySlugParam;

  contextIterator(document => {
    const post = {
      ...document.data,
      markdownBody: document.content,
    };

    const { category, categorySlug } = post;

    if (isCategoriesPage) {
      if (categorySlugParam === post.categorySlug) {
        posts.push(post);
      }
    } else {
      posts.push(post);
    }

    const hasCategory = categories.find(item => item.category === category);

    if (!hasCategory) {
      categories.push({
        category,
        categorySlug,
      });
    }

    if (document.data.featured) {
      features.push(post);
    }

    if (document.data.highlighted) {
      highlights.push(post);
    }
  });

  totalPosts = posts.length;

  posts = getPaginatedPosts(posts, page).sort(sortPostsByPublishDateDesc);

  return {
    posts,
    totalPosts,
    categories,
    features,
    highlights,
  };
};

export const handleBlogCategoriesPagePaths = (forceLimitLength = 10) => {
  const categories = getCategories();
  const posts = [];

  contextIterator(document => {
    const post = {
      ...document.data,
    };

    posts.push(post);

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

  let paths = categories.map(item => {
    const path = `/blog/categorias/${item.categorySlug}`;
    const categoryPosts = posts.filter(
      post => post.categorySlug === item.categorySlug
    );
    let pathsArray = [];
    let limit = categoryPosts.length;

    if (forceLimitLength && categoryPosts.length > forceLimitLength) {
      limit = forceLimitLength;
    }

    for (let index = 0; index < limit; index++) {
      pathsArray.push(`${path}/${index + 1}`);
    }

    pathsArray.unshift(path);
    return pathsArray;
  });

  paths = [].concat(...paths);

  return paths;
};

export const handleBlogSingle = async slug => {
  const posts = getPosts();
  const post = posts.find(item => item.slug === slug);

  const highlights = posts.filter(
    item => item.slug !== post.slug && item.highlighted === true
  );

  return {
    ...post,
    highlights,
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
