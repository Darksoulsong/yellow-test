import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getSlugs, getBlogIndexData, getPost } from '@services';
import { BlogArticle } from '@screens';

const Post = props => {
  const { title, author, image, markdownBody, posts } = props;

  const post = {
    title,
    author,
    body: <ReactMarkdown source={markdownBody} />,
    image,
  };

  return <BlogArticle post={post} posts={posts} />;
};

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const context = require.context('../../posts', true, /\.md$/);
  const post = await getPost(slug, context);
  const { posts } = getBlogIndexData(context);

  post.posts = posts;

  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const blogSlugs = getSlugs(require.context('../../posts', true, /\.md$/));
  const paths = blogSlugs.map(slug => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
