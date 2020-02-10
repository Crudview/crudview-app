import { combineReducers } from "redux";
import login from "./login";
export const rootReducers = combineReducers({
	login: login
});
