/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/articlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((artic) => artic.name === name);
  if (!article) return <NotFoundPage />;
  const otherArticles = articleContent.filter((articl) => articl.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
