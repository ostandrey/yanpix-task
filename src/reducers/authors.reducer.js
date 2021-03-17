import { AuthorsActions } from "../constants/authors.constants";

const initialState = {
    isLoading: false,
    authors: [],
    error: null
};

const authorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthorsActions.AUTHORS_REQUEST:
            return {
                ...state,
                isLoading: true,
                authors: [],
                error: null
            };
        case AuthorsActions.AUTHORS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authors: action.payload,
                error: null
            };
        case AuthorsActions.AUTHORS_REQUEST_ERROR:
            return {
                isLoading: false,
                authors: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default authorsReducer
