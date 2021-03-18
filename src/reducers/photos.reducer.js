import { PhotosActions } from "../constants/photos.constants";

const initialState = {
    isLoading: false,
    photos: [],
    photo: null,
    page: 1,
    error: null
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case PhotosActions.PHOTOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                photos: [...state.photos],
                page: action.payload,
                error: null
            };
        case PhotosActions.PHOTOS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photos: [...state.photos, ...action.payload],
                error: null
            };
        case PhotosActions.PHOTOS_REQUEST_ERROR:
            return {
                isLoading: false,
                photos: [],
                error: action.payload
            };
        case PhotosActions.PHOTOS_DELETE:
            return {
                ...state,
                photos: state.photos.filter(photo => photo.id !== action.payload)
            };
        case PhotosActions.PHOTO_INFO:
            return {
                ...state,
                photo: action.payload
            };
        default:
            return state
    }
};

export default photosReducer
