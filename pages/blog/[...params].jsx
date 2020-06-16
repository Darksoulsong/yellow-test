export { default, getStaticProps } from './index';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
