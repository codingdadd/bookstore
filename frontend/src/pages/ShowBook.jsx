import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Backbutton from '../components/Backbutton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false); // Corrected useState typo
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Backbutton />

      <div className='flex justify-center bg-slate-300 text-center text-2xl my-2 py-1'>
        Show Book
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center my-7">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="font-bold text-2xl mb-4 text-center">{book.title}</div>
            <div className="text-gray-700 text-lg mb-2">
              <span className="font-semibold">Author:</span> {book.author}
            </div>
            <div className="text-gray-700 text-lg mb-2">
              <span className="font-semibold">Published Year:</span> {book.publishedYear}
            </div>
            <div className="text-gray-500 text-sm">
              <span className="font-semibold">Book ID:</span> {book._id}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBook;
