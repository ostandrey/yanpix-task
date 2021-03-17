import React, {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {getAuthors} from "../actions/authors.action";
import AuthorsListItem from "./authors-list-item";

const AuthorsList = () => {
    const dispatch = useDispatch();
    const { authors, isLoading, error } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getAuthors());
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
                            authors.map( author =>
                            <AuthorsListItem
                                author={author}
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

// export default connect(mapStateToProps, mapDispathToProps)(AuthorsList)
export default AuthorsList
