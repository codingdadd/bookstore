import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        console.log(response);
        if (response.data && response.data.books) {
          setBooks(response.data.books);
        } else {
          setBooks([]); // Ensure books is an empty array if no data is returned
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setBooks([]); // Ensure books is an empty array in case of error
        setLoading(false);
      });
  }, []);

  return (
    <div className='px-5'>
      <div className='flex justify-start px-4 py-2 my-2 '>
        <h1 className='text-gray-900 text-center'>Book List</h1>
        <Link to="/book/create">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5'>
            Add Book
          </button>
        </Link>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>Sr.No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md-hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md-hidden'>Published Year</th>
                <th className='border border-slate-600 rounded-md'>Operation</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(books) && books.length > 0 ? (
                books.map((book, index) => (
                  <tr key={book._id} className='h-8'>
                    <td className='border border-slate-600 rounded-md p-2'>{index + 1}</td>
                    <td className='border border-slate-600 rounded-md p-2'>{book.title}</td>
                    <td className='border border-slate-600 rounded-md p-2'>{book.author}</td>
                    <td className='border border-slate-600 rounded-md p-2'>{book.publishedYear}</td>
                    <td className='border border-slate-600 rounded-md p-2'>
                      <div className='flex justify-center gap-x-4'>
                        <Link to={`/book/detail/${book._id}`} aria-label={`Details of ${book.title}`}>
                          <BsInfoCircle className='text-2xl text-green-800' title='View Details' />
                        </Link>
                        <Link to={`/book/edit/${book._id}`} aria-label={`Edit ${book.title}`}>
                          <AiOutlineEdit className='text-2xl text-yellow-800' title='Edit Book' />
                        </Link>
                        <Link to={`/book/delete/${book._id}`} aria-label={`Delete ${book.title}`}>
                          <MdOutlineDelete className='text-2xl text-red-800' title='Delete Book' />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className='text-center p-4'>No books available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Home;
