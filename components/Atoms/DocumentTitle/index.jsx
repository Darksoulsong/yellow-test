import React from 'react';
import Head from 'next/head';
import { DOCUMENT_TITLE_SUFFIX } from '@config';

export default function DocumentTitle({ children }) {
  const getTitle = () => {
    return children
      ? `${children} | ${DOCUMENT_TITLE_SUFFIX}`
      : DOCUMENT_TITLE_SUFFIX;
  };

  return (
    <Head>
      <title>{getTitle()}</title>
    </Head>
  );
}
