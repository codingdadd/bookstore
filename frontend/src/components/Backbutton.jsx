import React from 'react';
import { Link } from 'react-router-dom';

const Backbutton = ({distination = "/"}) => {
  return (
    <div>
        <Link to={distination}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5'>
                Back
            </button>
        </Link>
    </div>
  )
}

export default Backbutton
