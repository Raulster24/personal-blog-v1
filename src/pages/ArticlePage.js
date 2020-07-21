/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((artic) => artic.name === name);
  if (!article) return <h1>Article does not exist!</h1>;
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
    </>
  );
};

export default ArticlePage;
