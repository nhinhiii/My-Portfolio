import React from "react";

export const Footer = () => {
  return (
    <div className="w-full py-5 bg-[#b63c4a] dark:bg-[#3A1078] text-center text-white text-sm">
      &copy; {new Date().getFullYear()} Design by Nhi Y Nguyen. All rights
      reserved
    </div>
  );
};
