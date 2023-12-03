import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex searchbox ms-auto w-75'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='p-2 mr-2'
        style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
