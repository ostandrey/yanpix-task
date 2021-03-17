import axios from "axios";
import {PhotosActions} from "../constants/photos.constants";

export const getPhotos = () => {
    return(dispatch) => {
        dispatch(getPhotosStarted());
        axios.get('https://api.unsplash.com/photos?client_id=XPAz9fLDCtsJ_4_-BuE-Cy_bnRP_3HcxPt8CWw4Lfkc')
            //XPAz9fLDCtsJ_4_-BuE-Cy_bnRP_3HcxPt8CWw4Lfkc
            .then(res => {dispatch(getPhotosSuccess(res.data))})
            .catch(error => {dispatch(getPhotosError(error))})
    }
};

const getPhotosStarted = () => ({
    type: PhotosActions.PHOTOS_REQUEST
});

const getPhotosSuccess = (authors) => ({
    type: PhotosActions.PHOTOS_REQUEST_SUCCESS,
    payload: authors
});

const getPhotosError = (error) => ({
    type: PhotosActions.PHOTOS_REQUEST_ERROR,
    payload: error
});

export default getPhotos()
