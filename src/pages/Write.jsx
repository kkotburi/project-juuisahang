import { insertPost } from 'api/post';
import supabase from 'lib/supabaseClient';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const Write = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    if (!title || !title || !body) {
      alert('내용을 모두 입력해 주세요!');
      return;
    }

    // const { data } = await supabase.from('posts').insert([{}]);

    const { data, error } = await supabase.from('posts').insert([{ category, title, body }]).select();

    console.log(data);
  };

  // const queryQlient = useQueryClient();

  // const insertMutation = useMutation(insertPost, {
  //   onSuccess: () => {
  //     queryQlient.invalidateQueries('posts');
  //   }
  // });

  // const submitPost = () => {
  //   insertMutation.mutate({ category, title, body });
  // };

  return (
    <div>
      Write
      <form onSubmit={submitPost}>
        <input
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button type="submit">test</button>
      </form>
    </div>
  );
};

export default Write;
