import React from 'react';
import { useRouter } from 'next/router';
import {
  filterPostsByCategory,
  getCategories,
  getCategoryNameByCategorySlug,
} from '@services';
import { DocumentTitle } from '@components';
import { Blog } from '@screens';

const CategoryPosts = ({ posts }) => {
  const router = useRouter();
  const categorySlug = router.query.params[0];
  const categoryName = getCategoryNameByCategorySlug(categorySlug);
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
  const { params } = ctx.params;
  const posts = filterPostsByCategory(params[0]);

  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const blogCategories = getCategories();
  const paths = blogCategories.map(
    item => `/blog/categorias/${item.categorySlug}`
  );

  return {
    paths,
    fallback: false,
  };
}
