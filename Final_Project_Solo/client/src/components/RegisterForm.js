import { useState } from "react";

import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("");
    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/user", { email, password, passwordConfirm, userName, title, birthday, gender, bio })
        .then((response) => {
            console.log(response);
            navigate("/Home");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
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
            <form onSubmit={handleSubmit}>
                <div className="container w-50 border border-light">
                    <div className="border border-light m-2">
                        <div className="form-group row m-2">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                {errors.email ? <p className="alert alert-danger">{errors.email.message}</p> : null}
                            </div>
                        </div>
                        <div className="form-group row m-2">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                {errors.email ? <p className="alert alert-danger">{errors.password.message}</p> : null}
                            </div>
                        </div>
                        <div className="form-group row m-2">
                            <label htmlFor="passwordConfirm" className="col-sm-2 col-form-label">Confirm:</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setpasswordConfirm(e.target.value)}
                                    value={passwordConfirm}
                                />
                                {errors.email ? <p className="alert alert-danger">{errors.passwordConfirm.message}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="form-group col m-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                    placeholder="User Name (Ex: Fandom Fan)"
                                />
                                {errors.email ? <p className="alert alert-danger">{errors.userName.message}</p> : null}
                            </div>
                            <div className="form-group col m-2">
                                <input
                                    className="form-control"
                                    type="date"
                                    onChange={(e) => setBirthday(e.target.value)}
                                    value={birthday}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col m-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    placeholder="Title (Ex: Awsome Guy)"
                                />
                            </div>
                            <div className="form-group col m-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={(e) => setGender(e.target.value)}
                                    value={gender}
                                    placeholder="Gender (Ex: Male)"
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
                                placeholder="Tell us about yourself"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-4">
                        Create Account
                    </button>
                </div>
            </form>
            <div>
                <p className="text-light m-4">Already have an account?</p>
                <Link to="/Login">
                    <button type="button" className="btn btn-primary">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RegisterForm;