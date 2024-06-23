import { useState, useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams()
useEffect(() => {
  setLoading(true)
  axios
  .get(`http://localhost:5555/books/${id}`)
  .then(( response) => {
    setAuthor(response.data.author)
    setPublishedYear(response.data.publishedYear)
    setTitle(response.data.title)
    setLoading(false)

  })
  .catch((error) => {
    setLoading(false);
    alert('Something went wrong');
    console.log(error);
  });
},[])
  const EditBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
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
      <h1 className='text-center m-4 text-3xl text-sky-500'>Edit Book</h1>
      {loading && <Spinner animation="border" />}
      <div className='flex flex-col border-2 border-sky-400 w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl text-gray-700'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-sky-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-700'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-sky-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-700'>Published Year</label>
          <input
            type='text'
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className='border-2 border-sky-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-400 m-8' onClick={EditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
