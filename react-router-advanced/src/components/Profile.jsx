import { Routes, Route, Link } from "react-router-dom";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileSettings } from "./ProfileSettings";


function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav>
        <Link to="details">ProfileDetails</Link> |{" "}
        <Link to="settings">ProfileSettings</Link>
      </nav>

 <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>


    </div>
  );
}

export default Profile;
