import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { getSlugs, getPostsData } from '@services';
import { BlogArticle } from '../../src/screens';

const Post = props => {
  const { title, author, markdownBody, posts } = props;

  if (!markdownBody) {
    return null;
  }

  const post = {
    title,
    author,
    body: <ReactMarkdown source={markdownBody} />,
  };

  return <BlogArticle post={post} posts={posts} />;
};

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const markdown = await import(`../../posts/${slug}.md`);
  const { posts } = getPostsData(require.context('../../posts', true, /\.md$/));
  const document = matter(markdown.default);

  const {
    title,
    author,
    featured,
    category,
    publishDate,
    image,
  } = document.data;

  return {
    props: {
      title,
      author,
      featured,
      category,
      publishDate,
      image,
      markdownBody: document.content,
      posts,
    },
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
