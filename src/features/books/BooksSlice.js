const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: [
    { id: 1, title: "Something title", author: "alamin" },
    { id: 2, title: "another title", author: "piash" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addbook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isExist = state.books.filter((book) => book.id === id);
      if (isExist) {
        isExist[0].title = title;
        isExist[0].author = author;
      }
    },
  },
});

export const { showBooks, addbook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
