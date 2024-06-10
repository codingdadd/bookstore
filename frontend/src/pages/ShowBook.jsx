import {useState, useEffect} from 'react';
import Spinner from '../components/Spinner';
import Backbutton from '../components/Backbutton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading ,setLoading] = usestate(false);
  const {id} = useParams();


  return (
    <div>
      <Backbutton/>
      
    </div>
  )
}

export default ShowBook
