import React from 'react';
import Comments from 'components/detail/Comments';
import AddComments from 'components/detail/AddComments';

const Detail = () => {
  return (
    <>
      <AddComments />
      <Comments />
    </>
  );
};

export default Detail;
