import useBookStore from "../../store/conterStore";
import { Libro } from "../Libro";
import "./MyBooks.css";

export type MyBooksProps = {};

const MyBooks: React.FC<MyBooksProps> = () => {
	const favBooks = useBookStore((state) => state.favBooks);

	return (
		<section className="allbooks">
			<h2>Tengo {favBooks.length} libro(s) en mis favoritos</h2>
			<div className="allbooks-container">
				{favBooks.map((book, index) => (
					<Libro data={book} add={false} key={`${index}-${book.book.title}`} />
				))}
			</div>
		</section>
	);
};

export default MyBooks;
