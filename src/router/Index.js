import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/AddBook';
import EditBook from '../features/EditBook';
import ShowBook from '../features/ShowBook';
import Navigation from '../layout/Navigation';
import Home from '../pages/Home';
import NotFount from '../pages/NotFount';

const Index = () => {
    return (
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/show-book" element={<ShowBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/edit-book" element={<EditBook/>}/>

                
                <Route path="*" element={<NotFount/>}/>
            </Routes>
            
        </BrowserRouter>
    );
};

export default Index;