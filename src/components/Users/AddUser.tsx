import React, { ChangeEvent, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

interface Props {}

const AddUser = () => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState(Number);
	const addUserHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(enteredUsername, enteredAge);
	};

	const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEnteredAge(parseInt(e.target.value));
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" onChange={usernameChangeHandler} />
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" onChange={ageChangeHandler} />
				<Button type="submit" onClick={addUserHandler}>
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUser;
