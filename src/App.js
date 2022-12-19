import React from 'react';
import BookContextProvider from './context/BookContext';
import {Navbar} from './componenets/Navbar';
import { BookList } from './componenets/BookList';
import { BookForm } from './componenets/BookForm';

function App() {
  return (
    <>
    <BookContextProvider>
      <Navbar/>
      <BookList/>
      <BookForm/>
    </BookContextProvider>
    </>
    
  );
}

export default App;
