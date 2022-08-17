import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const UserProfilePromotions = () => {

    const [user, setUser] = useState({});
    const [userPromotions, setUserPromotions] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios
        .get("http://localhost:8000/user/" + id)
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
            setUserPromotions(res.data.promotes);
        })
        .catch((err) => console.log(err));
    }, [id]);

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
                <div className="d-flex align-items-center">
                    <h1 className="m-2">{user.userName}</h1>
                    <h5 className="m-2">{user.title}</h5>
                </div>
                <div className="container d-flex">
                    <div className="container col-2 border border-light m-1 p-0">
                        <Link to={"/User/" + id }>
                            <button type="button" className="w-100 p-0">
                                Profile
                            </button>
                        </Link>
                        <Link to={"/User/" + id + "/Promotions"}>
                            <button type="button" className="w-100 p-0 bg-dark text-light">
                                Promotions
                            </button>
                        </Link>
                        <Link to={"/User/" + id + "/Gallery"}>
                            <button type="button" className="w-100 p-0">
                                Gallery
                            </button>
                        </Link>
                    </div>
                    <div className="desc-box container border border-light m-1">
                        <div>
                            <h5>Promotions</h5>
                        </div>
                        <div className="d-flex">
                            {userPromotions.map((submission, index) => {
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
            </div>
        </div>
    );
};

export default UserProfilePromotions;