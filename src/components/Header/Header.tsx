import useBookStore from "../../store/conterStore";
import "./Header.css";
import React from "react";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const { setGenre } = useBookStore();
	const { setNumberOfPages, numberOfPages } = useBookStore();

	return (
		<header className="header">
			<h1>
				buenas<span>lecturas</span>
			</h1>
			<div className="all-books-controllers">
				<div className="filter-pages">
					<label htmlFor="pages"> Filtrar por paginas</label>
					<input
						type="range"
						value={numberOfPages}
						min={0}
						max={1200}
						name="pages"
						id="pages"
						onChange={(e) => {
							setNumberOfPages(e.target.valueAsNumber);
						}}
					/>
				</div>
				<span className="number-of-pages">{numberOfPages}</span>
				<div className="filter-genere">
					<label htmlFor="generos"> Filtrar por genero</label>
					<select
						name="generos"
						id="generos"
						onChange={(e) => setGenre(e.target.value)}
					>
						<option value="Todos">Todos</option>
						<option value="Terror">Terror</option>
						<option value="Ciencia ficción">Ciencia ficción</option>
						<option value="Zombies">Zombies</option>
						<option value="Fantasía">Fantasía</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
