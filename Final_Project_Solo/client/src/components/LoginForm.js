import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate(); //If I had time to implement sessions and user auth, this would be where you log into your account.

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
            
            <div>
                <p className="text-light">Don't have an account?</p>
                <Link to="/Register">
                    <button type="button" className="btn btn-primary">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;