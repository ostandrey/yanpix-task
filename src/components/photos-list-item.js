import React from 'react'

const PhotosListItem = ({photo, removePhoto, getPhotoInfo}) => {
    return(
        <li className="list-group-item">
            <div className="d-flex m-2 ">
                <img src={photo.user.profile_image.small}
                     alt="User profile image"
                     className="rounded-circle img-fluid" />
                <div className="d-flex flex-column ms-2">
                    <h5 className="mx-auto">{photo.user.name}</h5>
                    {/*<p className="bio text-muted lead"><small>{photo.user.bio}</small></p>*/}
                </div>
            </div>
            <div className="text-center">
                <img src={photo.urls.full} className="img-fluid rounded" alt={photo.alt_description}/>
            </div>
            <div className="d-flex justify-content-end mt-2">
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
