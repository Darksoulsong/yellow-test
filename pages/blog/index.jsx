import React from 'react';
import { getBlogIndexData } from '@services';
import { DocumentTitle } from '@components';
import { Blog } from '@screens';

const BlogIndex = ({ posts, categories, featuredList }) => {
  return (
    <>
      <DocumentTitle>Blog</DocumentTitle>
      <Blog posts={posts} categories={categories} featuredList={featuredList} />
    </>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const { posts, categories, featuredList } = getBlogIndexData();

  return {
    props: {
      posts,
      categories,
      featuredList,
    },
  };
}
