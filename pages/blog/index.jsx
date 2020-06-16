import React from 'react';
import { handleBlogIndexPage } from '@services';
import { Blog } from '@screens';

const BlogIndex = params => {
  return <Blog {...params} />;
};

export default BlogIndex;

export async function getStaticProps({ params }) {
  const pageNumber = params ? params.params[0] : 1;
  const categorySlug = params ? params.params[1] : null;
  const props = handleBlogIndexPage(pageNumber);

  return {
    props: {
      ...props,
      pageNumber,
      categorySlug,
    },
  };
}
