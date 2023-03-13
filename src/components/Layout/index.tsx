import React from "react";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex">
      <div className="w-full">
        <Sidebar />
      </div>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
