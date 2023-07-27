import { BookType } from "../../interfaces/api.interface";
import useBookStore from "../../store/conterStore";
import { AddRemoveButton } from "../AddRemoveButton";
import "./Libro.css";
import React from "react";

export type LibroProps = {
	data: BookType;
	add: boolean;
};

const Libro: React.FC<LibroProps> = ({ data, add }) => {
	const { addFavBooks, removeBooks, removeFavBooks, addBooks } = useBookStore();
	return (
		<div className="book-card">
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<img
				className="cover-book"
				src={data.book.cover}
				alt={`Portada del Libro ${data.book.title}`}
				onClick={() => {
					add ? addFavBooks(data) : addBooks(data);
					add ? removeBooks(data) : removeFavBooks(data);
				}}
			/>
			<div className="book-card-info">
				<h3 className="book-title">{data.book.title}</h3>
				<span>por {data.book.author.name}</span>
				<p className="book-description">{data.book.synopsis}</p>
				<span> {data.book.genre}</span>
			</div>
			<AddRemoveButton />
		</div>
	);
};

export default Libro;
