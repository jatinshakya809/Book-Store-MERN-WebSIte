import Home from "./home/Home";
import Courses from "./Courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import ContactRouting from "./contact/ContactRouting";
import { Toaster } from "react-hot-toast";

import AboutPage from "./about/AboutPage";
import { useAuth } from "./context/AuthProvider";
import ReadNow from "./readNow/ReadNow";
import ProfilePage from "./profile/ProfilePage";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/course"
          element={authUser ? <Courses></Courses> : <Navigate to="/signup" />}
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/contact"
          element={<ContactRouting></ContactRouting>}
        ></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/read" element={<ReadNow />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
