const initialState = {
	currentUser: {},
	isLoggedIn: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_USER":
			return { ...state, ...payload };
		case "CLEAR_USER":
			return { ...state, currentUser: {} };
		case "LOGGED_IN":
			return {
				...state,
				...payload
			};
		default:
			return state;
	}
};
