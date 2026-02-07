

function UserProfile() {
  return (
    <div className=" hover:shadow-xl bg-gray-100 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg"user-profile>
      <img className="hover:scale-110 transition-transform duration-300 ease-in-out rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="hover:text-blue-500 md:text-xl text-lg-sm text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-sm text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;