"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

function Home() {
  const { data, status } = useSession();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    userId: "",
  });
  async function submit() {
    if (data && status === "authenticated") {
      const id = toast.loading("Please wait...", { autoClose: 1000 });
      const res = await axios.post("/api/document", {
        ...inputData,
        userId: data.user?.id,
      });

      if (res.data.message) {
        toast.update(id, {
          render: res.data.message,
          type: "error",
          theme: "colored",
          isLoading: false,
          autoClose: 4000,
        });
      } else {
        setInputData({
          name: "",
          email: "",
          address: "",
          city: "",
          phone: "",
          userId: "",
        });
        toast.update(id, {
          render: "Added successfully !",
          type: "success",
          autoClose: 4000,
          theme: "colored",
          isLoading: false,
        });
      }
    }
  }
  return (
    <div className="container lg:w-2/4">
      {/* Heading */}
      <div className="flex items-center flex-col">
        <h2 className="text-2xl py-3">Create Document</h2>
        <div className="border-b w-full"></div>
      </div>
      {/* Form */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <input
          type="text"
          value={inputData.name}
          onChange={(e) =>
            setInputData((s) => ({ ...s, name: e.target.value }))
          }
          placeholder="Name"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <input
          value={inputData.email}
          onChange={(e) =>
            setInputData((s) => ({ ...s, email: e.target.value }))
          }
          type="text"
          placeholder="Email Address"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <input
          value={inputData.phone}
          onChange={(e) =>
            setInputData((s) => ({ ...s, phone: e.target.value }))
          }
          type="text"
          placeholder="Phone"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <input
          value={inputData.city}
          onChange={(e) =>
            setInputData((s) => ({ ...s, city: e.target.value }))
          }
          type="text"
          placeholder="City"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={inputData.address}
          onChange={(e) =>
            setInputData((s) => ({ ...s, address: e.target.value }))
          }
          type="text"
          placeholder="Address"
          className="border outline-none focus:border-gray-400 focus:bg-gray-100 py-1  px-2"
        />
        <button
          onClick={submit}
          className="border outline-none text-white bg-zinc-600 hover:bg-zinc-500 py-2  px-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
