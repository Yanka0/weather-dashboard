import React from "react";
import Header from "src/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";

interface Props {}

const Layout: React.FC<Props> = ({}) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center px-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
