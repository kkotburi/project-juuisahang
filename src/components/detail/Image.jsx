import React, { useEffect, useState } from 'react';
import supabase from 'lib/supabaseClient';

const Post = () => {
  const [fetchError, setFetchError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage.getBucket('images');

      if (error) {
        setFetchError('Could not fetch the images');
        setImages(null);
        console.log(error);
      }
      if (data) {
        setImages(data);
        setFetchError(null);
      }
    };

    fetchImages(images);
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div>{image}</div>
      ))}
    </div>
  );
};

export default Post;
