import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link, useParams } from "react-router-dom";
import moment from 'moment';

const ViewSubmission = () => {

    const [oneSubmission, setOneSubmission] = useState({});
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios
        .get("http://localhost:8000/submission/" + id)
        .then((response) => {
            console.log(response.data);
            setOneSubmission(response.data);
            setUser(response.data.creator)
        })
        .catch((err) => {
            console.log(err.response);
        })
    }, [id]);

    const PromoteSubmission = (props) => { //Didn't have time to get this working before deadline.
        axios
        .put("http://localhost:8000/submission/" + id + "/promote", { id: props.user.id})
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.res.data.err.errors);
        });
    };

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
            <div className="container d-flex">
                <div className="m-2">
                    <img src="https://via.placeholder.com/800" alt="Submission"/>
                </div>
                <div className="container border border-light m-2">
                    <div className="d-flex d-grid gap-2 m-2">
                        <Link to={"/User/" + user._id} className="nav-link active">{user.userName}</Link>
                        <p className="fst-italic">{user.title}</p>
                    </div>
                    <div className="d-flex justify-content-around m-2">
                        <button onClick={PromoteSubmission} className="btn btn-primary">
                            Promote
                        </button>
                        <button type="button" className="btn btn-primary"> {/*No use, but in a full app, it would download the file to your machine*/}
                            Download
                        </button>
                    </div>
                    <div className="container">
                        <div className="row">
                            <h4 className="row">{oneSubmission.title}</h4>
                            <p className="row">{moment(oneSubmission.createdAt).format("MMMM Do YYYY")}</p>
                        </div>
                        <div className="desc-box row border border-light mb-2">
                            <p className="overflow-auto">{oneSubmission.description}</p>
                        </div>
                        <div className="desc-box row border border-light">
                            <p className="overflow-auto">{oneSubmission.tags}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSubmission;