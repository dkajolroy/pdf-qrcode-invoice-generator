import { IconFileEarmarkPdf } from "@/components/IconFile";
import Link from "next/link";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Document() {
  return (
    <div className="container">
      <div className="flex items-center justify-between my-2">
        <h2 className="text-lg">All Documents</h2>
        <div className="flex border rounded  border-teal-500  items-center">
          <input
            type="search"
            placeholder="Type text..."
            className="border-none outline-none focus:border-gray-300 focus:bg-gray-100 py-1 rounded px-2"
          />
          <button className="bg-teal-500  py-1 px-2 hover:bg-teal-600 transition text-white ">
            Search
          </button>
        </div>
      </div>
      <div className="border-b"></div>
      <div className="grid lg:grid-cols-2 gap-5 my-5 items-center">
        {data.map((item, i) => (
          <div
            className="flex md:flex-row flex-col md:items-center gap-2 items-start  p-1 rounded bg-teal-500 justify-between"
            key={i}
          >
            <div className="flex gap-3 items-center">
              <span className="text-white text-5xl ">
                <IconFileEarmarkPdf />
              </span>
              <span className="text-white">Md Jahid</span>
              <span className="text-gray-200">ID: {item}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                href={`/document/${item}`}
                className="bg-cyan-700 text-white py-1 px-5 hover: hover:bg-cyan-800 transition"
              >
                View
              </Link>
              <button className="bg-cyan-700 text-white  py-1 px-5 hover: hover:bg-cyan-800 transition">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Document;
