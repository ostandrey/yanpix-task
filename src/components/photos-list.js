import React, {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {getPhotos} from "../actions/photos.action";
import PhotosListItem from "./photos-list-item";

const PhotosList = () => {
    const dispatch = useDispatch();
    const { photos, isLoading, error } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);
    return(
        <>{
            isLoading
            ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            :
                <div>
                    <ul className="list-group">
                        {
                            photos.map( photo =>
                            <PhotosListItem
                                photo={photo}
                            />)
                        }
                    </ul>
                </div>
        }</>
    )
};

// const mapStateToProps = state => ({
//     authors: state.authors
// });
//
// const mapDispathToProps =  dispatch => ({
//     getAuthors: () => dispatch(getAuthors()),
// });

// export default connect(mapStateToProps, mapDispathToProps)(PhotosList)
export default PhotosList
