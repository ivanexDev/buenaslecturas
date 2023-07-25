import useBookStore from "../../store/conterStore";
import { Libro } from "../Libro";
import "./AllBooks.css";
import { useEffect, useState } from "react";

export type AllBooksProps = {};

const AllBooks: React.FC<AllBooksProps> = () => {
	const books = useBookStore((state) => state.books);
	const favBooks = useBookStore((state) => state.favBooks);
	const genre = useBookStore((state) => state.genre);
	const [count, setcount] = useState<number | undefined>(0);

	useEffect(() => {
		setcount(document.querySelector(".allbooks-container")?.childElementCount);
	}, [genre, favBooks, books]);

	console.log(count);

	return (
		<section className="allbooks">
			<h2>Libros {count} </h2>
			<div className="allbooks-container">
				{books?.map((book, index) => {
					if (book.book.genre === genre) {
						return <Libro add data={book} key={`${book.book.ISBN}-${index}`} />;
					}
					if (genre === "Todos") {
						return <Libro add data={book} key={`${book.book.ISBN}-${index}`} />;
					}
				})}
			</div>
		</section>
	);
};

export default AllBooks;
