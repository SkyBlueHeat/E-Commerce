import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700">Practice Advice</h1>
        <h2 className="text-2xl font-semibold mt-2 text-gray-700">Featured Posts</h2>
      </header>
      <main className="w-full max-w-7xl px-6 pb-8">{children}</main>
    </div>
  );
};

export default Layout;
