import React from "react";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="pt-safe-top pb-safe-bottom border-2 border-green-500 h-full flex flex-col">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
