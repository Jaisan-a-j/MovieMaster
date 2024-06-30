import React, { useState, useEffect } from 'react';
import '../../assets/styles/Movielist.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Movieform from '../admin/Movieform';
import axios from 'axios';

const Movielist = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState('');
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState({
    name: '',
    year: '',
    description: '',
    rating: '',
    genre: '',
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/auth/getallmovies',
        );
        setMovies(response.data);
        console.log('Collected movies:', response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [modalShow]);

  const movieSubmit = async (e) => {
    e.preventDefault();
    console.log(movieData);

    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/createMovie',
        movieData,
      );
      setModalShow(false);
      console.log('Movie Created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className='table-container'>
      <table className='responsive-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Year</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.year}</td>
              <td>{row.description}</td>
              <td>{row.rating}</td>
              <td>{row.genre}</td>
              <td className='icon-cell'>
                <FaEdit
                  className='edit-icon'
                  onClick={() => {
                    handleEdit(row.id);
                    setModalShow(true);
                    setButtonLabel('Update');
                  }}
                />
              </td>
              <td className='icon-cell'>
                <FaTrash
                  className='delete-icon'
                  onClick={() => handleDelete(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className='add-button'
        onClick={() => {
          setModalShow(true);
          setButtonLabel('Add');
        }}
      >
        Add
      </button>
      <Movieform
        show={modalShow}
        buttonlabel={buttonLabel}
        onHide={() => setModalShow(false)}
        moviesubmit={movieSubmit}
        movieData={movieData}
        setMovieData={setMovieData}
      />
    </div>
  );
};

const handleEdit = (id) => {
  console.log(`Edit item with id: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Delete item with id: ${id}`);
};

export default Movielist;
