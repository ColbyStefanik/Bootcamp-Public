import { useState } from "react";

import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const SubmissionForm = (props) => {

    const [submissionType, setsubmissionType] = useState("");
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    /*const [tags, setTags] = useState([]);*/
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/submit", { submissionType: submissionType, creator: creator, title: title, description: description})
        .then((response) => {
            console.log(response);
            navigate("/Home");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    /*
    const addTag = () => {
        setTags(prevTags => [...prevTags, tagCounter]);
        setTagCounter(prevCounter => prevCounter + 1);
    };
    */

    return (
        <div className="main-div container-fliud bg-dark text-light">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <div className="d-flex">
                        <h1 className="text-white">Fandom</h1>
                        <Link to="/Upload" className="align-self-center">Upload</Link> {/*Normally wouldn't put this here,*/}
                    </div>                                                             {/*but lack of time to implement session required I put it somewhere*/}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/Home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Browse/Artwork" className="nav-link">Artwork</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Browse/Photos" className="nav-link">Photos</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Browse/Animation" className="nav-link">Animation</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/Login" className="nav-link text-primary">Log In</Link>
                </div>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="container w-50 border border-light">
                    <div className="form-group row m-2">
                        <label htmlFor="submissionType" className="col-sm-2 col-form-label">Type:</label>
                        <div className="col-sm-10">
                            <select
                                className="form-control"
                                onChange={(e) => setsubmissionType(e.target.value)}
                                value={submissionType}
                            >
                                <option selected>Open this select menu</option>
                                <option value="Artwork">Artwork</option>
                                <option value="Photo">Photo</option>
                                <option value="Animation">Animation</option>
                            </select>
                            {errors.title ? <p className="alert alert-danger">{errors.submissionType.message}</p> : null}
                        </div>
                    </div>
                    <div className="form-group row m-2">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder="Ex: My Cool Painting"
                            />
                            {errors.title ? <p className="alert alert-danger">{errors.title.message}</p> : null}
                        </div>
                    </div>
                    <div className="form-group row m-2">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                placeholder="Tell us about your submission"
                            />
                        </div>
                    </div>
                        <p>Tags:</p>
                        {/*<div> //I know how to make this work, but that would require some changes to how the backend handles tags for submissions
                        {tags.map(index => { //Because I have a deadline, there just wasn't time to work on it any longer.
                            return (
                                <div>
                                    <label htmlFor="tags"></label>
                                    <input
                                        type="text"
                                        onChange={(e) => setTags(e.target.value)}
                                        value={tags}
                                    />
                                </div>
                            );
                        })}
                        </div>
                        <button type="button" onClick={addTag}>
                            Add Tag
                        </button>*/}
                    <div className="form-group row m-2"> {/*Because we don't have a session, creator needs to be input manually*/}
                        <label htmlFor="creator" className="col-sm-2 col-form-label">Creator:</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setCreator(e.target.value)}
                                value={creator}
                            />
                        </div>
                    </div>
                    <button type="submit"  className="btn btn-primary m-4">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubmissionForm;