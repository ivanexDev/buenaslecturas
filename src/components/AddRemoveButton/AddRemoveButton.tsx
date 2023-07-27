import { BookType } from "../../interfaces/api.interface";
import useBookStore from "../../store/conterStore";
import "./AddRemoveButton.css";
import React from "react";

export type AddRemoveButtonProps = {
	add: boolean;
	data: BookType;
};

const AddRemoveButton: React.FC<AddRemoveButtonProps> = ({ data, add }) => {
	const { addFavBooks, removeBooks, removeFavBooks, addBooks } = useBookStore();
	const buttonStatus = add
		? "book-card-button add "
		: "book-card-button remove";
	return (
		<button
			type="button"
			className={buttonStatus}
			onClick={() => {
				add ? addFavBooks(data) : addBooks(data);
				add ? removeBooks(data) : removeFavBooks(data);
			}}
		>
			{add ? "Add to Fav" : "Remove"}
		</button>
	);
};

export default AddRemoveButton;
