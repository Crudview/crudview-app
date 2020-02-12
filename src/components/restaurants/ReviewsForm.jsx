import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import "../user-auth/UserAuth.scss";

const ReviewsForm = props => {
	const [userReview, setUserReview] = useState({
		comment: ""
	});

	const handleChange = e => {
		console.log("WRITING!");
		setUserReview({
			...userReview,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = () => {
		props.history.push("/restaruants/:id");
	};
	return (
		<div className="form-container">
			<h1
				style={{
					textAlign: "center",
					color: " #AE0127"
				}}
			>
				Reviews
			</h1>
			<form className="user-forms" onSubmit={handleSubmit}>
				<textarea
					style={{
						margin: "20px auto",
						width: "80%"
					}}
					type="text"
					placeholder="Enter Your Review"
					name="comment"
					value={userReview.comment}
					onChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default ReviewsForm;
