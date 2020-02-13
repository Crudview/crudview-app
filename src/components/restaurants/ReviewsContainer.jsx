import React, { useEffect } from "react";
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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(reviewActions.getReviews());
	}, [dispatch]);
	const classes = useStyles();
	const reviews = useSelector(state => state.review.reviews);
	const currentRestaurant = useSelector(
		state => state.restaurant.currentRestaurant
	);
	const restaurantReviews = reviews.filter(
		review => review.restaurant.id === currentRestaurant.id
	);
	console.log(restaurantReviews);

	const renderReviewsPage = () => {
		return restaurantReviews.map(review => {
			return (
				<ReviewsPage key={review.id} review={review} history={props.history} />
			);
		});
	};
	return <div className={classes.root}>{renderReviewsPage()}</div>;
};

export default ReviewsContainer;
