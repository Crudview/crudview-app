const initialState = {
	restaurants: [],
	currentRestaurant: {}
};

export const restaurantReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GET_RESTAURANTS":
			return { ...state, restaurants: payload };
		case "GET_CURRENT_RESTAURANT":
			return { ...state, currentRestaurant: payload };
		default:
			return state;
	}
};
