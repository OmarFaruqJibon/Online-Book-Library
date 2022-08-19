import React from 'react';
import { useSelector } from 'react-redux';

const ShowBook = () => {
    const books = useSelector(state=> state.bookReducer.books);

    // console.log(books)

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
                        console.log(book)
                        return(
                            <tr key={book.id}>
                            <th>{book.id}</th>
                            <th>{book.title}</th>
                            <th>{book.author}</th>
                            <th>
                                <button style={{background:"green", marginRight: "5px"}}>Edit</button>
                                <button style={{background:"red", marginRight: "5px"}}>Delete</button>

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