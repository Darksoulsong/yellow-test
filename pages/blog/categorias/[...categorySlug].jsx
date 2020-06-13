import React from 'react';
import { useRouter } from 'next/router';
import {
  getPostsFromCategory,
  getCategories,
  getCategoryNameByCategorySlug,
} from '@services';
import { DocumentTitle } from '@components';
import { Blog } from '@screens';

const CategoryPosts = ({ posts }) => {
  const router = useRouter();
  const categorySlug = router.query.categorySlug[0];
  const categoryName = getCategoryNameByCategorySlug(
    require.context('../../../posts', true, /\.md$/),
    categorySlug
  );
  const pageTitle = `Artigos da categoria "${categoryName}"`;

  return (
    <>
      <DocumentTitle>{pageTitle}</DocumentTitle>
      <Blog posts={posts} />
    </>
  );
};

export default CategoryPosts;

export async function getStaticProps(ctx) {
  const { categorySlug } = ctx.params;
  const posts = getPostsFromCategory(
    require.context('../../../posts', true, /\.md$/),
    categorySlug[0]
  );

  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const blogCategories = getCategories(
    require.context('../../../posts', true, /\.md$/)
  );
  const paths = blogCategories.map(category => `/blog/categorias/${category}`);

  return {
    paths,
    fallback: false,
  };
}
