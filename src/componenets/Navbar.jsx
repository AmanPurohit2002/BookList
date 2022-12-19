import React, { useContext } from 'react';
import {BookContext} from '../context/BookContext';

export const Navbar=()=>{
    const{books} =useContext(BookContext);

    return(
        <div className='navbar'>
            <h1>Aman Reading List</h1>
            <p>Cuurently you are having {books.length} books to go through....</p>
        </div>
    )
}