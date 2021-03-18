import React from 'react'
import Moment from 'moment'

const PhotoInfo = ({photo}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        {
                            photo
                                ?
                                <>
                                    <div className="text-center">
                                        <img
                                            src={photo.urls.full}
                                            className="img-fluid rounded image-info"
                                            alt={photo.alt_description}/>
                                    </div>

                                    <div className="d-flex column mt-2">
                                        <p className="me-5">Likes: {photo.likes}</p>
                                        <p className="me-5">Views: {photo.views}</p>
                                        <p>Created at: {Moment(photo.created_at).format('d MMM yyyy')}</p>
                                    </div>
                                    <div className="d-flex column">
                                        <p className="me-5">Width: {photo.width}</p>
                                        <p>Height: {photo.height}</p>
                                    </div>
                                    <p>About photo: {photo.description}</p>
                                </>
                                :
                                    <p>Photo is empty</p>
                        }

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PhotoInfo;

