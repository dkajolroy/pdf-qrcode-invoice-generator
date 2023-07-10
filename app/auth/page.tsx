"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
interface Props {
  searchParams: {
    callbackUrl: string;
    error?: "CredentialsSignin";
  };
}
function Auth({ searchParams }: Props) {
  const [inputData, setInputData] = useState({ username: "", password: "" });

  useEffect(() => {
    if (searchParams.error) {
      // error toast
    }
  }, [searchParams]);

  function submit() {
    signIn("credentials", {
      ...inputData,
      callbackUrl: searchParams.callbackUrl,
    });
  }
  return (
    <div className="h-screen bg-slate-200">
      <div className="container h-full flex justify-center items-center">
        <div className="flex flex-col gap-2 lg:w-1/4 bg-white p-5 rounded">
          <h2>Login please</h2>
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
            onChange={(e) =>
              setInputData((s) => ({ ...s, username: e.target.value }))
            }
            type="text"
            placeholder="Username"
            className="outline-none focus:bg-slate-100 border rounded px-2 py-1"
          />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
            onChange={(e) =>
              setInputData((s) => ({ ...s, password: e.target.value }))
            }
            type="text"
            placeholder="Password"
            className="outline-none focus:bg-slate-100 border rounded px-2 py-1"
          />
          <button
            onClick={submit}
            className="focus:outline-none hover:bg-teal-600 transition text-white py-1 bg-teal-500 rounded "
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
