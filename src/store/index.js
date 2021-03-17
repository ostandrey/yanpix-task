import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authorsReducer from "../reducers/authors.reducer";

export default createStore(authorsReducer, applyMiddleware(thunk));
