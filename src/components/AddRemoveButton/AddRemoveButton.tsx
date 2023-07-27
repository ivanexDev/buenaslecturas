import "./AddRemoveButton.css";
import React from "react";

export type AddRemoveButtonProps = {};

const AddRemoveButton: React.FC<AddRemoveButtonProps> = () => {
	return (
		<button type="button" className="addremovebutton">
			Add Remove
		</button>
	);
};

export default AddRemoveButton;
