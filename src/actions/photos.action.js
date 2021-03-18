import axios from "axios";
import {PhotosActions} from "../constants/photos.constants";

export const getPhotos = (count = 10) => {
    return(dispatch) => {
        dispatch(getPhotosStarted());

        axios.get(`https://api.unsplash.com/photos/random?client_id=I-GjKXR7z6Y8HAKyutYLFbKpftAZb5CfQsppNhjlrBk&count=${count}`)
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

export const removePhoto = (id) => ({
    type: PhotosActions.PHOTOS_DELETE,
    payload: id
});

export const getPhotoInfo = (photo) => ({
    type: PhotosActions.PHOTO_INFO,
    payload: photo
});


export default getPhotos()
