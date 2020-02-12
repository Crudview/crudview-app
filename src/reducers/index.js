import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { restaurantReducer } from "./restaurant";
import { reviewReducer} from './review'
export const rootReducers = combineReducers({
	login: loginReducer,
	restaurant: restaurantReducer,
	review: reviewReducer
});
