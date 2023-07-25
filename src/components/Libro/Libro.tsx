import { BookType } from "../../interfaces/api.interface";
import useBookStore from "../../store/conterStore";
import "./Libro.css";
import React from "react";

export type LibroProps = {
	data: BookType;
	add: boolean;
};

const Libro: React.FC<LibroProps> = ({ data, add }) => {
	const { addFavBooks, removeBooks, removeFavBooks, addBooks } = useBookStore();
	return (
		// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<img
			className="cover-book"
			src={data.book.cover}
			alt={`Portada del Libro ${data.book.title}`}
			onClick={() => {
				add ? addFavBooks(data) : addBooks(data);
				add ? removeBooks(data) : removeFavBooks(data);
			}}
		/>
	);
};

export default Libro;
