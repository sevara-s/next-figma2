import React from "react";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-4 border-b border-gray-300 p-[25px] flex items-center gap-[30px] ">
      {["Music", "File", "Edit", "View", "Account"].map((link) => (
        <h1 className="font-[700] text-[14px] text-[#09090b] cursor-pointer ">{link}</h1>
      ))}
    </div>
  );
};

export default Header;
  