import React from 'react';
import { useRouter } from 'next/router';
import {
  getCategories,
  getCategoryNameByCategorySlug,
  createBlogPaginationPaths,
  handleBlogCategoriesPage,
} from '@services';
import { Blog } from '@screens';

const CategoryPosts = params => {
  const router = useRouter();
  const categorySlug = router.query.params[0];
  const categoryName = getCategoryNameByCategorySlug(categorySlug);
  const pageParams = {
    ...params,
    documentTitle: `Artigos da categoria "${categoryName}"`,
  };

  return <Blog {...pageParams} />;
};

export default CategoryPosts;

export async function getStaticProps(ctx) {
  const { params } = ctx.params;
  const category = params[0];
  const pageNumber = params[1];
  const { posts, totalPosts, categories } = handleBlogCategoriesPage(
    category,
    pageNumber
  );

  return {
    props: {
      posts,
      totalPosts,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const blogCategories = getCategories();
  let paths = blogCategories.map(item => {
    const path = `/blog/categorias/${item.categorySlug}`;
    const paginationPaths = createBlogPaginationPaths(path + '/');

    paginationPaths.unshift(path);

    return paginationPaths;
  });

  paths = [].concat(...paths);

  return {
    paths,
    fallback: false,
  };
}
