import useBookStore from "../../store/conterStore";
import { Libro } from "../Libro";
import "./AllBooks.css";

export type AllBooksProps = {};

const AllBooks: React.FC<AllBooksProps> = () => {
	const books = useBookStore((state) => state.books);

	return (
		<section className="allbooks">
			<h2>Libros disponibles {books.length}</h2>
			<div>
				{books?.map((book, index) => {
					return <Libro add data={book} key={`${book.book.ISBN}-${index}`} />;
				})}
			</div>
		</section>
	);
};

export default AllBooks;
