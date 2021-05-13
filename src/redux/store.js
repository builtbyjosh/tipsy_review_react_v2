import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import breweryReducer from "./reducers/breweryReducer";
import reviewReducer from "./reducers/reviewReducer";

// const rootReducer = combineReducers({
//   brewery: breweryReducer,
//   review: reviewReducer,
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(breweryReducer, composeEnhancers(applyMiddleware(thunk))
);

export default store;