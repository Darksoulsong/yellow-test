import React from 'react';
import { getPostsData } from '@services';
import { DocumentTitle } from '@components';
import { Blog } from '@screens';

const BlogPage = ({ posts, categories, featuredList }) => {
  return (
    <>
      <DocumentTitle>Blog</DocumentTitle>
      <Blog posts={posts} categories={categories} featuredList={featuredList} />
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const { posts, categories, featuredList } = getPostsData(
    require.context('../../posts', true, /\.md$/)
  );

  return {
    props: {
      posts,
      categories,
      featuredList,
    },
  };
}
