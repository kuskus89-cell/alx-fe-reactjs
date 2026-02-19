import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav>
        <Link to="details">ProfileDetails</Link> |{" "}
        <Link to="settings">ProfileSettings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Profile;
