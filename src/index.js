import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/index";
import "./index.css";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";

const reduxDevTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	rootReducers,
	compose(applyMiddleware(thunk, logger), reduxDevTool)
);
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
