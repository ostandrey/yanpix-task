import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import photosReducer from "../reducers/photos.reducer";

export default createStore(photosReducer, applyMiddleware(thunk));
