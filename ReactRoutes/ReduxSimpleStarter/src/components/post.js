import React from 'react';

const Post = ({title, categories, content}) => {
  return (
    <div className="post post-id">
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{categories}</span>
    </div>
  );
}

export default Post;
