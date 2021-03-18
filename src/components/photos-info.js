import React from 'react'

const PhotosInfo = ({photo}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    </div>
                    <div className="modal-body">
                        {photo.width}
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

export default PhotosInfo;

