function Settings() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="flex items-center flex-col">
        <h2 className="text-2xl py-3">Settings</h2>
        <div className="border-b w-full"></div>
      </div>
      {/* Form */}
      <div className="grid grid-cols-3 gap-2 my-2">
        <label className="flex flex-col">
          <span className="text-gray-600 text-sm">Brand Name</span>
          <input
            type="text"
            placeholder="Brand name"
            className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-600 text-sm">Address</span>
          <input
            type="text"
            placeholder="Address"
            className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-600 text-sm">Phone</span>
          <input
            type="text"
            placeholder="Phone number"
            className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-600 text-sm">Email</span>
          <input
            type="text"
            placeholder="Email Address"
            className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
          />
        </label>
      </div>
    </div>
  );
}

export default Settings;
