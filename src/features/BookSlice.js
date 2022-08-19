import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {id: 1, title: "JavaScript", author: "Jibon"},
        {id: 2, title: "Java", author: "Jibon"},
        {id: 3, title: "Python", author: "Annie"},
        {id: 4, title: "C", author: "Annie"},
    ]
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
        editBook: (state, action) => {
            const {id, title, author} = action.payload;
            const matchBook = state.books.filter( (book) => book.id == id);
            if(matchBook){
                matchBook[0].title = title;
                matchBook[0].author = author;
            }
        },
    }
});

export const {showBooks, addBook, deleteBook, editBook} = bookSlice.actions;
export default bookSlice.reducer;