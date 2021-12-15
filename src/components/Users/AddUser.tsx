import React, { ChangeEvent, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState(0);
	const addUserHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge <= 0) {
			console.log("No data entered or age is too small");
			return;
		}
		console.log(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge(0);
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
				<input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
				<Button type="submit" onClick={addUserHandler}>
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUser;
