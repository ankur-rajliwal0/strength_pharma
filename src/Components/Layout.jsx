
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
