import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import reviewActions from "../../actions/ReviewsAction";

const useStyles = makeStyles({
	root: {
		padding: "20px",
		borderBottom: "1px solid #e6e6e6"
	},
	user: {
		fontStyle: "italic",
		fontSize: "1.5rem",
		marginLeft: "10px"
	},
	comment: {
		marginLeft: "10px"
	},

	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold);",
		marginLeft: "10px"
	}
});
const ReviewsPage = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(reviewActions.getReviews());
	}, [dispatch]);
	const currentUser = useSelector(state => state.login.currentUser);
	// const currentRestaurant = useSelector(
	// 	state => state.restaurant.currentRestaurant
	// );
	const classes = useStyles();
	console.log("props: ", props);

	const handleEdit = review => {
		dispatch(reviewActions.currentReview(review));
		setTimeout(() => {
			props.history.push("/restaurants/review-edit-form");
		}, 2000);
	};

	const handleDelete = review => {
		dispatch(reviewActions.deleteReview(review));
		setTimeout(() => {
			props.history.go(`${props.history.location.pathname}`);
		}, 2000);
	};
	return (
		<div className={classes.root}>
			{currentUser.username === props.review.user.username ? (
				<div>
					<p className={classes.user}>{props.review.user.username}</p>
					<p className={classes.comment}>{props.review.comment}</p>
					<Button
						onClick={() => handleEdit(props.review)}
						className={classes.button}
						variant="outlined"
					>
						Edit
					</Button>
					<Button
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
