import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './index.css';


const App = () => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Submitted");
  }
  return (
    <div className='container'>
      <h1 className='title'>Image Selector</h1>
        <div className='search-section'>
          <Form>
            <Form.Control
              type='search'
              placeholder='Type something to search...'
              className='search-input'
            />
          </Form>
        </div>
      
    </div>
  )
};

export default App;