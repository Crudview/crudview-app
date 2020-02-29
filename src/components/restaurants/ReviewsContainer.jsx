import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import ReviewsPage from "./ReviewsPage";
import reviewActions from "../../actions/ReviewsAction";

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
	const reviews = useSelector(state => state.review.reviews);
	const currentRestaurant = useSelector(
		state => state.restaurant.currentRestaurant
	);

	const restaurantReviews = reviews.filter(
		review => review.restaurant.id === currentRestaurant.id
	);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			{restaurantReviews.map(review => (
				<ReviewsPage key={review.id} review={review} history={props.history} />
			))}
		</div>
	);
};

export default ReviewsContainer;
