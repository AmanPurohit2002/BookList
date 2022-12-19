import React,{useContext,useState} from 'react';
import {BookContext} from '../context/BookContext';

export const BookForm=()=>{
    const{dispatch} =useContext(BookContext);

    const[title,setTitle]=useState('');
    const[author,setAuthor]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch({type:'ADD_BOOK',book:{title:title,author:author}});
        setTitle('');
        setAuthor('');
    }

    const disable=title.length ===0 && author.length===0;

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} placeholder='book title'  
                onChange={(e)=>(setTitle(e.target.value))}
            />
            <input type='text' value={author} placeholder='book author'  
                onChange={(e)=>(setAuthor(e.target.value))}
            />
            <button disabled={disable}>Add book</button>
        </form>
    )
}