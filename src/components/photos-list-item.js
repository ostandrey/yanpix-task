import React from 'react'

const PhotosListItem = ({photo, removePhoto, getPhotoInfo}) => {
    return(
        <li className="list-group-item">
            <div className="d-flex">
                <img src={photo.user.profile_image.small}
                     alt="User profile image"
                     className="rounded-circle img-fluid" />
                <div className="d-flex flex-column">
                    <h6>{photo.user.first_name}</h6>
                </div>
            </div>
            <img src="" className="img-fluid" alt="..."/>
            <div className="d-flex justify-content-end">
                <button type="button"
                        className="btn btn-outline-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => getPhotoInfo()}
                >
                    Info
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => removePhoto()}
                >
                    Delete
                </button>
            </div>
        </li>
    )
};

export default PhotosListItem;
