import React from 'react'

const PhotosListItem = ({photo, removePhoto}) => {
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
                        data-bs-target="#exampleModal">
                    Info
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
