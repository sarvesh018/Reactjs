import React from "react";
import { Link } from "react-router-dom";

export default function GoBack() {
  return (
    <div className="">
      <Link
        to="/"
        className="text-black font-bold px-4 py-4 text-2xl bg-slate-100 rounded-xl hover:bg-[#545454] hover:text-white"
      >
        Back
      </Link>
    </div>
  );
}
