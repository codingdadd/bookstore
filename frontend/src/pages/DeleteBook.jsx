import { useState, useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const  DeleteBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams()

  const  DeleteBook = () => {
    
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Something went wrong');
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col items-center'>
      <Backbutton />
      <h1 className='text-center m-4 text-3xl text-sky-500'>Delete Book</h1>
      {loading && <Spinner animation="border" />}
      <div className='flex flex-col border-2 border-sky-400 w-[600px] p-4 mx-auto'>
       <h1 className='text-center m-4 text-3xl text-sky-500'>
        Are you sure you want to delete this book?
       </h1>
       
        <button className='p-2 bg-sky-400 m-8' onClick={DeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
