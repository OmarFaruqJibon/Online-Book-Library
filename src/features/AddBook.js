import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';

const AddBook = () => {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    
    const numberOfBooks = useSelector(state=> state.bookReducer.books.length);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const book = {id: numberOfBooks+1, title, author}
        dispatch(addBook(book));
        navigate("/show-book", {replace: true});
    }

    return (
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label  style={{marginRight: "44px", fontWeight: "bold"}} htmlFor="title">Title</label>
                    <input
                    type="text"
                    placeholder='Book title'
                    id='title'
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label  style={{marginRight: "25px", fontWeight: "bold"}} htmlFor="author">Author</label>
                    <input
                    type="text"
                    placeholder='Book author'
                    id='author'
                    name='author'
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;