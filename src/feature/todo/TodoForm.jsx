import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.title : '');
  const [description, setDescription] = useState(props.edit ? props.edit.description : '')
  // const inputRef = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleDesChange = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      title: input,
      description: description
    });

    setInput('');
    setDescription('')
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <section className="row justify-content-center pt-5 pl-3 pr-3">
          <input
            style={{ marginRight: 5 }}
            placeholder='Update your Title'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit text-black-50'
          />

          <input
            placeholder='Update your Description'
            value={description}
            onChange={handleDesChange}
            name='text'
            className='todo-input edit text-black-50'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </section>
      ) : (
          <section className="row justify-content-center pt-5 pl-3 pr-3">
            <input
              style={{ marginRight: 5 }}
              placeholder='Title'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input text-black-50'
            />
            <input
              placeholder='Description'
              value={description}
              onChange={handleDesChange}
              name='text'
              className='todo-input text-black-50'
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add todo
          </button>
          </section>
        )}
    </form>
  );
}

export default TodoForm;
