import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Shared/Footer';
import Header from '../Components/Pages/Shared/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;