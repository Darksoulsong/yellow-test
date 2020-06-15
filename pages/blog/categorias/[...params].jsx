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
  const [categorySlug] = router.query.params;
  const categoryName = getCategoryNameByCategorySlug(categorySlug);
  const pageParams = {
    ...params,
    categorySlug,
    documentTitle: `Artigos da categoria "${categoryName}"`,
  };

  return <Blog {...pageParams} />;
};

export default CategoryPosts;

export async function getStaticProps(ctx) {
  const { params } = ctx.params;
  const category = params[0];
  const pageNumber = params[1];
  const { posts, totalPosts, categories, featuredList } = handleBlogIndexPage(
    pageNumber,
    category
  );

  return {
    props: {
      posts,
      totalPosts,
      categories,
      featuredList,
    },
  };
}

export async function getStaticPaths() {
  const { paths } = handleBlogCategoriesPagePaths();

  return {
    paths,
    fallback: false,
  };
}
