import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Backbutton from '../components/Backbutton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false); // Corrected useState typo
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBooks(response.data);
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

      <div className='flex justify-center bg-slate-300 text-center text-2xl my-2 py-1'>Show Book</div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center max-w-md rounded overflow-hidden shadow-lg bg-white my-7">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{books.id}</div>
            <div className="font-bold text-xl mb-2">{books.title}</div>
            <p className="text-gray-700 text-base">{books.author}</p>
            <p className="text-gray-700 text-base">{books.publishedYear}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBook;
