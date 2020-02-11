const initialState = {
	restaurants: []
};

export const restaurantReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GET_RESTAURANTS":
			return { ...state, restaurants: payload };

		default:
			return state;
	}
};
