import matter from 'gray-matter';

const contextIterator = (context, callback) => {
  const keys = context.keys();
  const values = keys.map(context);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const document = matter(values[index].default);
    const shouldBreak = callback(key, document);

    if (shouldBreak) {
      break;
    }
  }
};

export const getCategoryNameByCategorySlug = (context, slug) => {
  let name = '';

  contextIterator(context, (key, document) => {
    const { categorySlug, category } = document.data;

    if (slug === categorySlug) {
      name = category;

      return true;
    }
  });

  return name;
};

const getFilename = key => key.replace(/^.*[\\/]/, '').slice(0, -3);

export const getPostsData = context => {
  const posts = [];
  const categories = [];
  const featuredList = [];

  contextIterator(context, (key, document) => {
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

export const getPostsFromCategory = (context, categoryName) => {
  const categoryPosts = [];

  contextIterator(context, (key, document) => {
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

    if (categoryName !== categorySlug) {
      return;
    }

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

    categoryPosts.push(post);
  });

  return categoryPosts;
};

export const getCategories = context => {
  const categories = [];

  contextIterator(context, (key, document) => {
    const { categorySlug } = document.data;

    if (categories.indexOf(categorySlug) === -1) {
      categories.push(categorySlug);
    }
  });

  return categories;
};

export const getSlugs = context => {
  const slugs = [];

  contextIterator(context, (key, document) => {
    slugs.push(document.data.slug);
  });

  return slugs;
};

export const resolveFileNameBySlug = (slug, context) => {
  let filename = '';

  contextIterator(context, (key, document) => {
    if (document.data.slug === slug) {
      filename = getFilename(key);
      return true;
    }
  });

  return filename;
};
