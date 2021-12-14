import React from "react";

import classes from "./Button.module.css";

interface Props {
	children: React.ReactNode;
	type: undefined | "button" | "submit";
}

const Button = ({ type, children }: Props) => {
	return (
		<button className={classes.button} type={type}>
			{children}
		</button>
	);
};

export default Button;
