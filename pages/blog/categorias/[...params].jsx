import React from 'react';
import { useRouter } from 'next/router';
import {
  getCategoryNameByCategorySlug,
  handleBlogIndexPage,
  handleBlogCategoriesPagePaths,
} from '@services';
import { Blog } from '@screens';

const CategoryPosts = params => {
  const router = useRouter();
  const [categorySlug, pageNumber] = router.query.params;
  const categoryName = getCategoryNameByCategorySlug(categorySlug);
  const pageParams = {
    ...params,
    categorySlug,
    pageNumber,
    documentTitle: `Artigos da categoria "${categoryName}"`,
  };

  return <Blog {...pageParams} />;
};

export default CategoryPosts;

export async function getStaticProps(ctx) {
  const [category, pageNumber] = ctx.params.params;
  const props = handleBlogIndexPage(pageNumber, category);

  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = handleBlogCategoriesPagePaths(1);

  return {
    paths,
    fallback: true,
  };
}
