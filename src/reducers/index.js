import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { restaurantReducer } from "./restaurant";

export const rootReducers = combineReducers({
	login: loginReducer,
	restaurant: restaurantReducer
});
