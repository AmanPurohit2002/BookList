//to give book data
import React,{createContext,useEffect,useReducer} from 'react';
import {BookReducer} from '../reducers/BookReducer';

export const BookContext=createContext();

//default export ---goes withour curly braces
//not default ---goes with curly braces
const BookContextProvider=(props)=>{

    const [books,dispatch]=useReducer(BookReducer,[
        // {title:'Mahabharat',author:'Lord Krishna',id:1},
        // {title:'Ramayana',author:'Lord Ram',id:2},
    ],()=>{
        const localData=localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(()=>{
        localStorage.setItem("books",JSON.stringify(books));
    },[books])

    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;