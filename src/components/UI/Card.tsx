import React from "react";

import classes from "./Card.module.css";

interface Props {
	children: React.ReactNode;
	className: {};
}

const Card = ({ className, children }: Props) => {
	return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
