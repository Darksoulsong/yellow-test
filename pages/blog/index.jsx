import React from 'react';
import { getPostsData } from '@services';
import { DocumentTitle } from '@components';
import { Blog } from '../../src/screens';

const BlogTest = ({ posts, categories, featuredList }) => {
  return (
    <>
      <DocumentTitle>Blog</DocumentTitle>
      <Blog posts={posts} categories={categories} featuredList={featuredList} />
    </>
  );
};

export default BlogTest;

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
