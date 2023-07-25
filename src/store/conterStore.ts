import { BookType } from "../interfaces/api.interface";
import { create } from "zustand";

interface bookState {
	books: BookType[];
	favBooks: BookType[];
	filteredBooks: BookType[];
	getBooks: () => void;
	removeBooks: (newBooks: BookType) => void;
	addFavBooks: (newFavBooks: BookType) => void;
	removeFavBooks: (newBooks: BookType) => void;
	addBooks: (newFavBooks: BookType) => void;
}

const useBookStore = create<bookState>((set) => ({
	books: [],
	favBooks: [],
	filteredBooks: [],

	getBooks: async () => {
		const res = await fetch("http://localhost:3000/library");
		const allBooks = await res.json();

		set((_state) => ({ books: allBooks, filteredBooks: allBooks }));
	},

	addFavBooks: (newFavBooks: BookType) =>
		set((state) => ({
			favBooks: [...state.favBooks, newFavBooks],
		})),

	removeBooks: (newBooks: BookType) =>
		set((state) => ({
			books: state.books?.filter(
				(book) => book.book.ISBN !== newBooks.book.ISBN,
			),
		})),

	removeFavBooks: (newBooks: BookType) =>
		set((state) => ({
			favBooks: state.favBooks?.filter(
				(book) => book.book.ISBN !== newBooks.book.ISBN,
			),
		})),

	addBooks: (newFavBooks: BookType) =>
		set((state) => ({
			books: [...state.books, newFavBooks],
		})),
}));

export default useBookStore;
