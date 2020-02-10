//  API Endpoints

const BASE_URL = "http://localhost:3001";
const USERS_URL = BASE_URL + "/users";
const PERSIST_URL = BASE_URL + "/persist";
const LOGIN_URL = BASE_URL + "/login";
const SPECIFIC_USER_URL = id => USERS_URL + "/" + id;

// actions

const setUserActions = userObj => ({
	type: "SET_USER",
	payload: userObj
});

const setClearUser = () => ({
	type: "CLEAR_USER"
});

// bind Action Creators

const newUserToDB = userObj => dispatch => {
	let config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify(userObj)
	};

	fetch(USERS_URL, config)
		.then(res => res.json())
		.then(data => {
			dispatch(setUserActions(userObj));
			localStorage.setItem("token", data.token);
		});
};

const loginUserToDB = userObj => dispatch => {
	let config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify(userObj)
	};

	fetch(LOGIN_URL, config)
		.then(res => res.json())
		.then(data => {
			dispatch(setUserActions(userObj));
			localStorage.setItem("token", data.token);
		});
};

const persistUser = userObj => dispatch => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `bearer ${localStorage.token}`
		}
	};
	fetch(PERSIST_URL, config)
		.then(res => res.json())
		.then(data => {
			dispatch(setUserActions(userObj));
		});
};

const logoutUser = () => dispatch => {
	dispatch(setClearUser());
	localStorage.clear();
};

export default {
	newUserToDB,
	loginUserToDB,
	persistUser,
	logoutUser
};
