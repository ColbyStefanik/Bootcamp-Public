import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const BrowseSubmissions = () => {

    const [allSubmissions, setAllSubmissions] = useState([]);
    const {subType} = useParams();

    useEffect(() => {
        axios
        .get("http://localhost:8000/submissions/" + subType)
        .then((response) => {
            console.log(response.data);
            setAllSubmissions(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, [subType]);

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
            <div className="container">
                <div>
                    <h2>Most Recent {subType}</h2>
                </div>
                <div className="d-flex">
                    {allSubmissions.map((submission, index) => {
                        return (
                            <div key={submission._id} className="card m-1">
                                <Link to={"/Submission/" + submission._id}>
                                    <img className="card-img" src="https://via.placeholder.com/150" alt="Submission"/>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BrowseSubmissions;