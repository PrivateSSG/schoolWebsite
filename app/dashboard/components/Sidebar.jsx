import React from "react";
import Link from "next/link";
import {
  VscBook,
  VscRepo,
  VscDeviceCamera,
  VscFeedback,
  VscOutput,
} from "react-icons/vsc";

export default function Sidebar() {
  return (
    <>
      <div className="p-2 max-lg:flex-wrap  shadow-2xl">
        <div className="sidebar flex flex-col space-y-6 p-2 items-center ">
          <div className="top text-center">
            <h1>Dashboard Overview</h1>
          </div>
          <div className="main-sidebar flex flex-col  justify-center space-y-5 items-start">
            <div className="withsvg flex space-x-1 items-center hover:text-slate-500">
              <VscRepo size={25} />
              <h1 className="max-lg:text-[13px]">Forms</h1>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
