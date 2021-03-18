import axios from "axios";
import {PhotosActions, apiPath} from "../constants";
import config from "../config"


export const getPhotos = (page = 1) => {
    return(dispatch) => {
        dispatch(getPhotosStarted(page));
        axios.get(`${apiPath.PHOTOS}?client_id=${config.ACCESS_KEY}&page=${page}`)
            .then(res => {dispatch(getPhotosSuccess(res.data))})
            .catch(error => {dispatch(getPhotosError(error))})
    }
};

const getPhotosStarted = (page) => ({
    type: PhotosActions.PHOTOS_REQUEST,
    payload: page
});

const getPhotosSuccess = (authors) => ({
    type: PhotosActions.PHOTOS_REQUEST_SUCCESS,
    payload: authors
});

const getPhotosError = (error) => ({
    type: PhotosActions.PHOTOS_REQUEST_ERROR,
    payload: error
});

export const removePhoto = (id) => ({
    type: PhotosActions.PHOTOS_DELETE,
    payload: id
});

export const getPhotoInfo = (photo) => ({
    type: PhotosActions.PHOTO_INFO,
    payload: photo
});

export default getPhotos()
