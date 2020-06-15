import { createBlogPaginationPaths } from '@services';
export { default, getStaticProps } from './index';

export async function getStaticPaths() {
  const paths = createBlogPaginationPaths('/blog/');

  return {
    paths,
    fallback: false,
  };
}
