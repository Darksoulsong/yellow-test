import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { getSlugs, getPostsData, resolveFileNameBySlug } from '@services';
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
  const rawFiles = require.context('../../posts', true, /\.md$/);
  const filename = resolveFileNameBySlug(slug, rawFiles);
  const markdown = await import(`../../posts/${filename}.md`);
  const { posts } = getPostsData(rawFiles);
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
