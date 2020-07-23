/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, { method: 'post' });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvotes</button>
      <p>
        This post have been upvoted

        {upvotes}

        times
      </p>
    </div>

  );
};

export default UpvoteSection;
