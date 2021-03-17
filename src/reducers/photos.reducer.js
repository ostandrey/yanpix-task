import { PhotosActions } from "../constants/photos.constants";

const initialState = {
    isLoading: false,
    photos: [],
    error: null
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case PhotosActions.PHOTOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                photos: [...state.photos],
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
        default:
            return state
    }
};

export default photosReducer
