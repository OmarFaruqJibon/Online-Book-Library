import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { editBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [id, setToBookId] = useState(location.state.id);
    const [title, setToBookTitle] = useState(location.state.title);
    const [author, setBookAuthor] = useState(location.state.author);


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(editBook({id, title, author}))   
        navigate("/show-book", {replace: true});

    }

    return (
        <div>
            <h1>Edit Book</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label  style={{marginRight: "44px", fontWeight: "bold"}} htmlFor="title">Title</label>
                    <input
                    type="text"
                    id='title'
                    name='title'
                    value={title}
                    onChange={(e) => setToBookTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label  style={{marginRight: "25px", fontWeight: "bold"}} htmlFor="author">Author</label>
                    <input
                    type="text"
                    id='author'
                    name='author'
                    value={author}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Save</button>
            </form>

        </div>
    );
};

export default EditBook;