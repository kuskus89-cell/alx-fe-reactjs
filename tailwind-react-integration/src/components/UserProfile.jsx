

function UserProfile() {
  return (
    <div className="bg-gray-100 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg"user-profile>
      <img className="rounded-full mx-auto w-sm-24 h-sm-24 w-36 h-36" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-xl text-lg-sm text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-sm text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;