import useBookStore from "../../store/conterStore";
import { Libro } from "../Libro";
import "./AllBooks.css";
import { useEffect, useState } from "react";

export type AllBooksProps = {};

const AllBooks: React.FC<AllBooksProps> = () => {
	const books = useBookStore((state) => state.books);
	const favBooks = useBookStore((state) => state.favBooks);
	const genre = useBookStore((state) => state.genre);
	const numberOfPages = useBookStore((state) => state.numberOfPages);
	const [count, setcount] = useState<number | undefined>(0);

	useEffect(() => {
		setcount(document.querySelector(".allbooks-container")?.childElementCount);
	}, [genre, favBooks, books, numberOfPages]);

	return (
		<section className="allbooks">
			<h2>Libros disponibles: {count} </h2>
			<div className="allbooks-container">
				{books?.map((book) => {
					if (book.book.genre === genre) {
						if (book.book.pages <= numberOfPages) {
							return <Libro add data={book} key={crypto.randomUUID()} />;
						}
					}
					if (genre === "Todos") {
						if (book.book.pages <= numberOfPages) {
							return <Libro add data={book} key={crypto.randomUUID()} />;
						}
					}
				})}
			</div>
		</section>
	);
};

export default AllBooks;
