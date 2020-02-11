import React from "react";

import "./HomePage.scss";
export const HomePage = () => {
	return (
		<div className="home-page">
			<h1
				style={{
					textAlign: "center",
					marginLeft: "80px",
					color: "crimson"
				}}
			>
				Welcome To Crudview
			</h1>
			<img
				className="main-img"
				src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				alt="home_page_cover"
			/>
		</div>
	);
};
