import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {id: 1, title: "JavaScript", author: "Jibon"},
        {id: 2, title: "Java", author: "Jibon"},
        {id: 3, title: "Python", author: "Annie"},
        {id: 3, title: "C", author: "Annie"},
    ]
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state
    }
});

export const {showBooks} = bookSlice.actions;
export default bookSlice.reducer;