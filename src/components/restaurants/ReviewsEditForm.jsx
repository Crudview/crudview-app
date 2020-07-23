import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";

import reviewActions from "../../actions/ReviewsAction";

import "../user-auth/UserAuth.scss";

const ReviewsEditForm = (props) => {
	const dispatch = useDispatch();
	const currentRestaurant = useSelector(
		(state) => state.restaurant.currentRestaurant
	);
	const currentReview = useSelector((state) => state.review.currentReview);
	const [userReview, setUserReview] = useState({
		comment: "",
	});

	const handleChange = (e) => {
		setUserReview({
			...userReview,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(reviewActions.editReviews(userReview, currentReview));
		setTimeout(() => {
			props.history.push(`/restaurants/${currentRestaurant.id}`);
		}, 1000);
	};
	return (
		<div className="form-container">
			<h1
				style={{
					textAlign: "center",
					color: " #AE0127",
				}}
			>
				Reviews
			</h1>
			<form className="user-forms" onSubmit={handleSubmit}>
				<textarea
					style={{
						margin: "20px auto",
						width: "80%",
					}}
					type="text"
					placeholder="Enter Your Review"
					name="comment"
					value={userReview.comment}
					onChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Update
				</Button>
			</form>
		</div>
	);
};

export default ReviewsEditForm;
