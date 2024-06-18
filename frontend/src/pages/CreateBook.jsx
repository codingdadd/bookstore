import {useState , useEffect }from 'react';
import {useNavigate} from "react-router-dom";
import Backbutton from '../components/Backbutton';
import axios from "axios";

const Createbook = () => {
  const [books , setBooks] = useState({});
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect (() =>{
setLoading(true);
axios
.post('http://localhost:5555/books')
.then((request) =>{

})

  })

  return (
    <div>
      
    </div>
  )
}

export default Createbook
