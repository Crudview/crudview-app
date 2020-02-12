import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import ReviewsPage from "./ReviewsPage";

const useStyles = makeStyles({
	root: {
		margin: "20px auto 20px 112px",
		width: "80%",
		border: "5px solid crimson",
		display: "flex",
		flexDirection: "column",
		borderRadius: "10px"
	}
});
const ReviewsContainer = props => {
	const classes = useStyles();
	const reviews = useSelector(state => state.review.reviews);
	console.log("reviews: ", reviews);

	const renderReviewsPage = () => {
		return reviews.map(review => {
			return <ReviewsPage key={review.id} review={review} />;
		});
	};
	return <div className={classes.root}>{renderReviewsPage()}</div>;
};

export default ReviewsContainer;
