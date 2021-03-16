import React from 'react'

const AuthorsList = () => {
    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="d-flex">
                        <img src="" className="rounded-circle img-fluid" alt="..."/>
                        <div className="d-flex flex-column">
                            <h6>Name Surname</h6>
                            <p>rwerwerwer</p>
                        </div>
                    </div>
                    <img src="..." className="img-fluid" alt="..."/>
                    <div className="d-flex justify-content-end">
                        <button type="button"
                                className="btn btn-outline-primary me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Primary
                        </button>
                        <button type="button" className="btn btn-outline-danger">Danger</button>
                    </div>
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    )
};

export default AuthorsList
