import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Movieform = (props) => {
  const { movieData, setMovieData } = props;

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton onClick={() => setMovieData('')}>
          <Modal.Title id='contained-modal-title-vcenter'>
            Movie Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={movieData.name}
                onChange={handleChange}
              />
              <Form.Label>Year</Form.Label>
              <Form.Control
                type='text'
                name='year'
                value={movieData.year}
                onChange={handleChange}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={movieData.description}
                onChange={handleChange}
              />
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type='text'
                name='rating'
                value={movieData.rating}
                onChange={handleChange}
              />
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type='text'
                name='genre'
                value={movieData.genre}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit' onClick={props.moviesubmit}>
              {props.buttonlabel}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Movieform;
