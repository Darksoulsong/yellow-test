import matter from 'gray-matter';

const iterator = (context, callback) => {
  const keys = context.keys();
  const values = keys.map(context);

  keys.forEach((key, index) => callback(key, values[index].default));
};

export const getPostsData = context => {
  const posts = [];
  const categories = [];
  const featuredList = [];

  iterator(context, (key, value) => {
    const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
    const document = matter(value);
    const {
      title,
      author,
      featured,
      category,
      publishDate,
      image,
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

    if (categories.indexOf(document.data.category) === -1) {
      categories.push(document.data.category);
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

export const getSlugs = context => {
  const keys = context.keys();
  const data = keys.map(key => {
    let slug = key.replace(/^.*[\\/]/, '').slice(0, -3);

    return slug;
  });

  return data;
};
