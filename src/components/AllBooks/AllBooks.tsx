import useBookStore from "../../store/conterStore";
import { Libro } from "../Libro";
import "./AllBooks.css";

export type AllBooksProps = {};

const AllBooks: React.FC<AllBooksProps> = () => {
	const books = useBookStore((state) => state.books);
	const genre = useBookStore((state) => state.genre);

	return (
		<section className="allbooks">
			<h2>Libros disponibles {books.length}</h2>
			<div>
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
