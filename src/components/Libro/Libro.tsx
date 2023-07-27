import { BookType } from "../../interfaces/api.interface";
import { AddRemoveButton } from "../AddRemoveButton";
import "./Libro.css";
import React from "react";

export type LibroProps = {
	data: BookType;
	add: boolean;
};

const Libro: React.FC<LibroProps> = ({ data, add }) => {
	return (
		<div className="book-card">
			<img
				className="cover-book"
				src={data.book.cover}
				alt={`Portada del Libro ${data.book.title}`}
			/>
			<div className="book-card-info">
				<h3 className="book-title">{data.book.title}</h3>
				<span>por {data.book.author.name}</span>
				<p className="book-description">{data.book.synopsis}</p>
				<span> {data.book.genre}</span>
			</div>
			<AddRemoveButton data={data} add={add} />
		</div>
	);
};

export default Libro;
