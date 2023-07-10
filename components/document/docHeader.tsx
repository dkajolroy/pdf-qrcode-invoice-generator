function DocHeader({ data }: { data: Document }) {
  return (
    <div className="flex justify-between p-4">
      <div className="flex-[3]">
        <h1 className="text-3xl italic font-extrabold tracking-widest text-indigo-500">
          {data.name}
        </h1>
        <p className="text-base">
          If account is not paid within 7 days the credits details supplied as
          confirmation.
        </p>
      </div>
      <div className="flex-[2]">
        <ul className="flex">
          <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-sm">www.yourcompnay.com</span>
            <span className="text-sm">www.yourcompnay.com</span>
          </li>
          <li className="flex flex-col p-2 border-l-2 border-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">2821 Keraniganj, Dhaka</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DocHeader;
