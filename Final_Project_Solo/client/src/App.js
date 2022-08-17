import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import SubmissionForm from "./components/SubmissionForm";
import ViewSubmission from "./components/ViewSubmission";
import BrowseSubmissions from "./components/BrowseSubmissions";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";
import UserProfilePromotes from "./components/UserProfilePromotes";
import UserProfileGallery from "./components/UserProfileGallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/Home" element={<FrontPage />} />
          <Route path="/Upload" element={<SubmissionForm />} />
          <Route path="/Submission/:id" element={<ViewSubmission />} />
          <Route path="/Browse/:subType" element={<BrowseSubmissions />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/User/:id" element={<UserProfile />} />
          <Route path="/User/:id/Promotions" element={<UserProfilePromotes />} />
          <Route path="/User/:id/Gallery" element={<UserProfileGallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
