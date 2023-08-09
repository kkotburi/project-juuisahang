import { useState } from 'react';
import supabase from 'lib/supabaseClient';

const AddComments = () => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !body) {
      setFormError('Please fill in all the fields correctly');
      return;
    }
    //console.log(name, body);

    const { data, error } = await supabase.from('comments').insert([{ name, body }]);

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly');
    }

    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  return (
    <div className="page add">
      <form onSubmit={handleSubmit}>
        <lable htmlFor="name">Name :</lable>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <lable htmlFor="body">Body :</lable>
        <textarea
          type="text"
          id="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <button>Submit</button>

        {formError && <p className="eror">{formError}</p>}
      </form>
    </div>
  );
};

export default AddComments;
