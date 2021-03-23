import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import PostList from './Components/PostsList/PostList';
import './App.scss';

export interface Data {
  data: Posts
}

export interface Posts {
  posts: arrPosts
}

export interface arrPosts {
[x: string]: any;
data: [Post]
}

export interface Post {
    id: string;
    title: string;
    body: string;
}

const GET_POSTS = gql`
  query getPosts($limit: Int) {
    posts(options: {paginate:{limit:$limit}}) {
    data {
      id
      title
      body
    }
  }
  }
`;

export default () => {
  const [limit, setLimit] = useState(10);
  const { loading, data, fetchMore } = useQuery<Posts>(GET_POSTS, {
    variables: {
      offset: 0,
      limit,
    },
  });

  const posts = !loading ? data?.posts.data : [];

  const onLoadMore = () => {
    const currentLength = posts?.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 10,
      },
    }).then((fetchMoreResult) => {
      setLimit(Number(`${currentLength}`) + fetchMoreResult.data.posts.data.length);
    });
  };

  const handleScroll = ({ currentTarget }: React.UIEvent<HTMLDivElement, UIEvent>,
    onLoadMor: { (): void; (): void; }) => {
    if (
      currentTarget.scrollTop + currentTarget.clientHeight + 300
    >= currentTarget.scrollHeight
    ) {
      onLoadMor();
    }
  };

  return (
    <div
      className="app"
      onScroll={(e) => {
        handleScroll(e, onLoadMore);
      }}
    >
      <h1 className="blockName">All posts</h1>
      {loading && <div>Loading...</div>}
      {!loading && (
        <PostList
          data={posts || [] as any}
        />
      )}
    </div>
  );
};
