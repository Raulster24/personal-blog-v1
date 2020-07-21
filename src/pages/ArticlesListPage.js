/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';
import ArticleList from '../components/articlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
  <>
    <h1>Articles List!</h1>
    <ArticleList articles={articleContent} />
  </>
);

export default ArticlesListPage;
