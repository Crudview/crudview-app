import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";

import reviewActions from "../../actions/ReviewsAction";

const useStyles = makeStyles({
	root: {
		padding: "20px",
		borderBottom: "1px solid #e6e6e6",
	},
	user: {
		fontStyle: "italic",
		fontSize: "1.5rem",
		marginLeft: "10px",
	},
	comment: {
		marginLeft: "10px",
	},

	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold);",
		marginLeft: "10px",
	},
});
const ReviewsPage = (props) => {
	console.log(props.review);
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.login.currentUser);
	// const restaurantReviews = useSelector(
	// 	(state) => state.review.restaurantReviews
	// );
	const classes = useStyles();

	const handleEdit = (review) => {
		dispatch(reviewActions.currentReview(review));
		props.history.push("/restaurants/review-edit-form");
	};

	const handleDelete = (review) => {
		dispatch(reviewActions.deleteReview(review));
		setTimeout(() => {
			props.history.go(`${props.history.location.pathname}`);
		}, 1000);
	};

	return (
		<div id={props.review.id} className={classes.root}>
			{currentUser.username === props.review.user.username ? (
				<div>
					<p className={classes.user}>{props.review.user.username}</p>
					<p className={classes.comment}>{props.review.comment}</p>
					<Button
						// type="submit"
						onClick={() => handleEdit(props.review)}
						className={classes.button}
						variant="outlined"
					>
						Edit
					</Button>
					<Button
						// type="submit"
						onClick={() => handleDelete(props.review)}
						className={classes.button}
						variant="outlined"
					>
						Delete
					</Button>
				</div>
			) : (
				<div>
					<p className={classes.user}>{props.review.user.username}</p>
					<p className={classes.comment}>{props.review.comment}</p>
				</div>
			)}
		</div>
	);
};

export default ReviewsPage;
