import React from "react";

import classes from "./Button.module.css";

interface Props {
	children: React.ReactNode;
	type: undefined | "button" | "submit";
	onClick: (e: React.SyntheticEvent) => void;
}

const Button = ({ type, children, onClick }: Props) => {
	return (
		<button className={classes.button} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
