import Link from "next/link";
import { IconFileEarmarkPdf } from "./IconFile";

interface Props {
  item: Document;
}
function Document({ item }: Props) {
  console.log(origin);
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-2 items-start  p-1 rounded bg-zinc-500 justify-between">
      <div className="flex gap-3 items-center">
        <span className="text-white text-5xl ">
          <IconFileEarmarkPdf />
        </span>
        <span className="text-white">{item.name}</span>
        <span className="text-gray-200">ID: {item.accountNo}</span>
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href={`/document/${item.accountNo}`}
          className="bg-zinc-600 text-white py-1 px-5 hover: hover:bg-zinc-700 transition"
        >
          View
        </Link>
        <button className="bg-zinc-600 text-white  py-1 px-5 hover: hover:bg-zinc-700 transition">
          Download
        </button>
      </div>
    </div>
  );
}

export default Document;
