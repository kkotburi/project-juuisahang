import { getPosts } from 'api/post';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Category = () => {
  const { data: posts, isLoading, isError } = useQuery('posts', getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <div
        style={{
          border: '2px solid black',
          margin: '10px',
          padding: '10px'
        }}
      >
        {posts.map((post) => {
          return (
            <div
              style={{
                border: '1px solid black',
                margin: '5px',
                padding: '10px'
              }}
              key={post.id}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  제목 : <Link to={`/detail/${post.id}`}>{post.title}</Link>
                </div>
                <div>
                  <div>작성자 : {post.writer}</div>
                  <div>{post.created_at}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
