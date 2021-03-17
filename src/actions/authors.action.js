import axios from "axios";
import {AuthorsActions} from "../constants/authors.constants";

export const getAuthors = () => {
    return(dispatch) => {
        dispatch(getAuthorsStarted());
        axios.get('https://api.unsplash.com/photos?client_id=XPAz9fLDCtsJ_4_-BuE-Cy_bnRP_3HcxPt8CWw4Lfkc')
            //XPAz9fLDCtsJ_4_-BuE-Cy_bnRP_3HcxPt8CWw4Lfkc
            .then(res => {dispatch(getAuthorsSuccess(res.data))})
            .catch(error => {dispatch(getAuthorsError(error))})
    }
};

const getAuthorsStarted = () => ({
    type: AuthorsActions.AUTHORS_REQUEST
});

const getAuthorsSuccess = (authors) => ({
    type: AuthorsActions.AUTHORS_REQUEST_SUCCESS,
    payload: authors
});

const getAuthorsError = (error) => ({
    type: AuthorsActions.AUTHORS_REQUEST_ERROR,
    payload: error
});

export default getAuthors()
