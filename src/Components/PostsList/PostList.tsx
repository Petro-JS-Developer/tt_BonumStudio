import React from 'react';
import './postsList.scss';
import { Post, arrPosts } from '../../App';

const PostList = ({ data }:{data:arrPosts}) => (
  <>
    <ul
      className="listPosts"
    >
      {data.map(({ id, title, body }: Post) => (
        <li key={id} className="listPosts__item">
          <div className="listPosts__item_id">{id}</div>
          <div className="listPosts__item_title">{title}</div>
          <div className="listPosts__item_body">{body}</div>
        </li>
      ))}
    </ul>
  </>
);

export default PostList;
