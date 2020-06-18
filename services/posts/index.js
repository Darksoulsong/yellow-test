export { createBlogPaginationPaths } from './utils';
import {
  contextIterator,
  getPaginatedPosts,
  sortPostsByPublishDateDesc,
  dateFormat,
  slugify,
} from './utils';

export const getPosts = () => {
  return contextIterator('posts', (document, _, __, slug) => {
    const post = document.data;
    return {
      ...post,
      slug: slugify(slug),
      publishDate: dateFormat(post.publishDate),
      markdownBody: document.content,
    };
  });
};

export const getCategories = () => {
  return contextIterator('categories', (document, _, array, filename) => {
    const { title } = document.data;
    const categorySlug = slugify(filename);

    if (!array.find(item => item.category === title)) {
      return { category: title, categorySlug };
    }
  });
};

export const getCategoryNameByCategorySlug = slug => {
  let name = '';
  const categories = getCategories();

  for (let index = 0; index < categories.length; index++) {
    const item = categories[index];

    if (slug === item.categorySlug) {
      name = item.category;

      break;
    }
  }

  return name;
};

export const handleBlogIndexPage = (page = 1, categorySlugParam) => {
  let posts = [];
  let totalPosts = 0;
  const categories = [];
  const features = [];
  const highlights = [];
  const isListingCategories = !!categorySlugParam;
  const categoriesList = getCategories();

  getPosts().forEach(post => {
    const category = categoriesList.find(
      item => item.category === post.category
    );

    if (isListingCategories) {
      if (categorySlugParam === category.categorySlug) {
        posts.push(post);
      }
    } else {
      posts.push(post);
    }

    const hasCategory = categories.find(
      item => item.category === post.category
    );

    if (!hasCategory) {
      categories.push({
        category: post.category,
        categorySlug: category.categorySlug,
      });
    }

    if (post.featured) {
      features.push(post);
    }

    if (post.highlighted) {
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

  contextIterator('posts', document => {
    const post = {
      ...document.data,
    };

    const categorySlug = categories.find(
      item => item.category === post.category
    );

    post.categorySlug = categorySlug;

    posts.push(post);

    const hasCategory = categories.find(
      item => item.category === post.category
    );

    if (!hasCategory) {
      categories.push({
        category: post.category,
        categorySlug,
      });
    }
  });

  let paths = categories.map(item => {
    const path = `/blog/categorias/${item.categorySlug}`;
    const categoryPosts = posts.filter(post => {
      return post.categorySlug === item.categorySlug;
    });
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

export const filterPostsByCategory = categorySlug =>
  getPosts().filter(post => categorySlug === post.categorySlug, []);

export const getSlugs = () => getPosts().map(post => post.slug);
