import {useState, useEffect} from 'react';
import Spinner from '../components/Spinner';
import Backbutton from '../components/Backbutton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading ,setLoading] = usestate(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setBooks(response.data.book)
      setLoading(false);

    }).catch((error)=>{
      console.log(error)
      setLoading(false);
    })

  },[id])

  return (
    <>
      
      <Backbutton/>

      <div className='flex bg-slate-300  text-center text-2xl'>Show Book</div>
      
{setLoading ?(<Spinner/>) : (
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
   
  <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">{books.id}</div>
    <div class="font-bold text-xl mb-2">{books.title}</div>
    <p class="text-gray-700 text-base">
      {books.author}
    </p>
    <p class="text-gray-700 text-base">
      {books.publishedYear}
    </p>
  </div>
  
</div>

)}
      
    </>
  )
}

export default ShowBook
