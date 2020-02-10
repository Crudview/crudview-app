const initialState = {
	currentUser: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_USER":
			return { ...state, currentUser: payload };
		case "CLEAR_USER":
			return { ...state, currentUser: {} };
		case "LOGGED_IN":
			return {
				...state,
				isLoggedIn: payload
			};
		default:
			return state;
	}
};
