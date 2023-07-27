import db from "../../db.json";
import { BookType } from "../interfaces/api.interface";
import { create } from "zustand";

interface bookState {
	books: BookType[];
	favBooks: BookType[];
	genre: string;

	getBooks: () => void;
	removeBooks: (newBooks: BookType) => void;
	addFavBooks: (newFavBooks: BookType) => void;
	removeFavBooks: (newBooks: BookType) => void;
	addBooks: (newFavBooks: BookType) => void;
	setGenre: (newGenre: string) => void;
}

const useBookStore = create<bookState>((set) => ({
	books: [],
	favBooks: [],
	genre: "Todos",

	getBooks: async () => {
		const allBooks = await db.library;

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

	setGenre: (newGenre: string) =>
		set(() => ({
			genre: newGenre,
		})),
}));

export default useBookStore;
