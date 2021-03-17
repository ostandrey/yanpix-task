import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPhotos, removePhoto} from "../actions/photos.action";
import PhotosListItem from "./photos-list-item";
import InfiniteScroll from "react-infinite-scroll-component";

const PhotosList = () => {

    const dispatch = useDispatch();
    const { photos, isLoading } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    return(
        <>{
            isLoading && photos.length === 0
            ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            :
                <div>
                    <ul className="list-group">
                        <InfiniteScroll
                            dataLength={photos.length}
                            next={() => { dispatch(getPhotos(5)); }}
                            hasMore={true}
                            loader={<p>Loading...</p>}
                        >
                            {
                                photos.map( photo =>
                                    <PhotosListItem
                                        key={photo.id}
                                        photo={photo}
                                        removePhoto={() => dispatch(removePhoto(photo.id))}
                                    />)
                            }
                        </InfiniteScroll>
                    </ul>
                </div>
        }</>
    )
};

export default PhotosList
