import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';

const ShowBook = () => {
    const books = useSelector(state=> state.bookReducer.books);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    }

    return (
        <div>
            <h1>List of Books</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {books && books.map( (book) => {
                        const {id, title, author} = book;
                        return(
                            <tr key={id}>
                            <th>{id}</th>
                            <th>{title}</th>
                            <th>{author}</th>
                            <th>
                                <Link to="/edit-book" state={{id, title, author}}>
                                    <button style={{background:"green", marginRight: "5px"}}>Edit</button>
                                </Link>
                                <button style={{background:"red", marginRight: "5px"}} onClick={()=> handleDelete(book.id)}>Delete</button>

                            </th>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    );
};

export default ShowBook;