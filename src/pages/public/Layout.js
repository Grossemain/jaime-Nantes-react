import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/public/Header';
import Banniere from '../../components/public/Banniere';


import './layout.css'

const Layout = () => {
    return (
        <div className="Layout">

            <Header/>
            <Banniere/>
            
            <Outlet/>

        </div>
    );
};

export default Layout;