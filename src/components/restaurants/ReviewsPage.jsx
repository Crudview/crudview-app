import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		padding: "20px",
		borderBottom: "2px solid black",
		background: "#cfc7c6"
	},
	user: {
		fontStyle: "lighter"
	},
	comment: {},

	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold);",
		marginLeft: "10px"
	}
});
const ReviewsPage = props => {
	const currentUser = useSelector(state => state.login.currentUser);
	const classes = useStyles();
	console.log("props: ", props);
	return (
		<div className={classes.root}>
			{Object.keys(currentUser).length > 0 ? (
				<div>
					<p className={classes.user}>{currentUser.username}</p>
					<p className={classes.comment}>{props.review.comment}</p>
					<Button className={classes.button} variant="outlined">
						Edit
					</Button>
					<Button className={classes.button} variant="outlined">
						Delete
					</Button>
				</div>
			) : (
				<div>
					<p className={classes.user}>{currentUser.username}</p>
					<p className={classes.comment}>{props.review.comment}</p>
				</div>
			)}
		</div>
	);
};

export default ReviewsPage;
