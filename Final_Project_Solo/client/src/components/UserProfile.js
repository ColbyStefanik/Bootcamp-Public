import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

const UserProfile = () => {

    const [user, setUser] = useState({});
    const [userName, setuserName] = useState("");
    const [title, setTitle] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [bio, setBio] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
        .get("http://localhost:8000/user/" + id)
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
            setuserName(res.data.userName);
            setTitle(res.data.title);
            setBirthday(res.data.birthday);
            setGender(res.data.gender);
            setBio(res.data.bio);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const editHandler = (e) => {
        e.preventDefault();
        axios
        .put("http://localhost:8000/user/" + id, { userName: userName, title: title, birthday: birthday, gender: gender, bio: bio })
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
            navigate("/User/" + id); //For some reason the page doesn't reload when calling this, who knows why.
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
            <div className="container">
                <div className="d-flex align-items-center">
                    <h1 className="m-2">{user.userName}</h1>
                    <h5 className="m-2">{user.title}</h5>
                    <div className="m-2">
                        <Button variant="btn btn-primary" onClick={handleShow}> {/*Normally this would only be available to the user*/}
                            Edit User                                           {/*But with no session implented it had to be left somewhere to demonstrate functionanily*/}
                        </Button>
                    </div>
                </div>
                <div className="container d-flex">
                    <div className="container col-2 border border-light m-1 p-0">
                        <Link to={"/User/" + id }>
                            <button type="button" className="w-100 p-0 bg-dark text-light">
                                Profile
                            </button>
                        </Link>
                        <Link to={"/User/" + id + "/Promotions"}>
                            <button type="button" className="w-100 p-0">
                                Promotions
                            </button>
                        </Link>
                        <Link to={"/User/" + id + "/Gallery"}>
                            <button type="button" className="w-100 p-0">
                                Gallery
                            </button>
                        </Link>
                    </div>
                    <div className="container col-10 border border-light m-1">
                        <div className="row">
                            <h3 className="row m-1">About {user.userName}</h3>
                            <p className="row m-1">{user.title}</p>
                        </div>
                        <div className="row border border-light m-2 mb-2">
                            <p className="col">Member Since: {moment(user.createdAt).format("MMMM Do YYYY")}</p>
                            <p className="col">Birthday: {moment(user.birthday).format("MMMM Do YYYY")}</p>
                            <p className="col">Gender: {user.gender}</p>
                        </div>
                        <div className="desc-box row border border-light m-2">
                            <p className="col overflow-auto">{user.bio}</p>
                        </div>
                    </div>
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit {user.userName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form onSubmit={editHandler}>
                        <div className="container">
                            <div className="form-group row m-2">
                                <label htmlFor="userName" className="col-sm-2 col-form-label">User Name:</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => setuserName(e.target.value)}
                                        value={userName}
                                    />
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
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-2">
                                <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday:</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="date"
                                        onChange={(e) => setBirthday(e.target.value)}
                                        value={birthday}
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-2">
                                <label htmlFor="gender" className="col-sm-2 col-form-label">Gender:</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={(e) => setGender(e.target.value)}
                                        value={gender}
                                    />
                                </div>
                            </div>
                            <div className="row m-2">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    type="text"
                                    onChange={(e) => setBio(e.target.value)}
                                    value={bio}
                                />
                            </div>
                            <div className="d-flex justify-content-center m-2">
                                <button type="submit" className="btn btn-primary">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default UserProfile;