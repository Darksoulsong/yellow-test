import matter from 'gray-matter';

const iterator = (context, callback) => {
  const keys = context.keys();
  const values = keys.map(context);

  keys.forEach((key, index) => callback(key, values[index].default));
};

export const getCategoryNameByCategorySlug = (context, slug) => {
  let name = '';

  iterator(context, (key, value) => {
    const document = matter(value);
    const { categorySlug, category } = document.data;

    if (name) {
      return;
    }

    if (slug === categorySlug) {
      name = category;
    }
  });

  return name;
};

const getFilename = key => key.replace(/^.*[\\/]/, '').slice(0, -3);

export const getPostsData = context => {
  const posts = [];
  const categories = [];
  const featuredList = [];

  iterator(context, (key, value) => {
    const document = matter(value);
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

  iterator(context, (key, value) => {
    const document = matter(value);
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

  iterator(context, (key, value) => {
    const document = matter(value);
    const { categorySlug } = document.data;

    if (categories.indexOf(categorySlug) === -1) {
      categories.push(categorySlug);
    }
  });

  return categories;
};

export const getSlugs = context => {
  const slugs = [];

  iterator(context, (key, value) => {
    const document = matter(value);
    const { slug } = document.data;
    slugs.push(slug);
  });

  return slugs;
};

export const resolveFileNameBySlug = (slug, context) => {
  let filename = '';

  iterator(context, (key, value) => {
    const document = matter(value);

    if (filename) return;

    if (document.data.slug === slug) {
      filename = getFilename(key);
    }
  });

  return filename;
};
