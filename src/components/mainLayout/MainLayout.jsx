import React from 'react';
import NavBar from '../navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;