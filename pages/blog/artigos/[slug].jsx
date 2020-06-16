import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getSlugs, handleBlogSingle } from '@services';
import { BlogArticle } from '@screens';

const BlogSingle = props => {
  const { title, author, image, markdownBody, highlights } = props;
  const params = {
    post: {
      title,
      author,
      body: <ReactMarkdown source={markdownBody} />,
      image,
    },
    highlights,
    documentTitle: `${title} - Blog`,
  };

  return <BlogArticle {...params} />;
};

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const props = await handleBlogSingle(slug);

  return {
    props,
  };
}

export async function getStaticPaths() {
  const blogSlugs = getSlugs(require.context('../../../posts', true, /\.md$/));
  const paths = blogSlugs.map(slug => `/blog/artigos/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default BlogSingle;
