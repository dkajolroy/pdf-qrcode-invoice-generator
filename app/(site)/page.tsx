"use client";

function Home() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="flex items-center flex-col">
        <h2 className="text-2xl py-3">Create Document</h2>
        <div className="border-b w-full"></div>
      </div>
      {/* Form */}
      <div className="grid grid-cols-3 gap-2 my-2">
        <input
          type="text"
          placeholder="Name"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <input
          type="text"
          placeholder="Phone"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <input
          type="text"
          placeholder="Other"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
      </div>
    </div>
  );
}

export default Home;
