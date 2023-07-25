import "./App.css";
import { AllBooks } from "./components/AllBooks";
import { Header } from "./components/Header";
import { MyBooks } from "./components/MyBooks";
import useBookStore from "./store/conterStore";
import { useEffect } from "react";

function App() {
	const { getBooks } = useBookStore();

	useEffect(() => {
		getBooks();
	}, []);

	return (
		<>
			<div className="App">
				<Header />
				<div className="container">
					<AllBooks />
					<section className="lista-lecturas">
						<MyBooks />
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
