import React from 'react';
import { Routes, Route } from "react-router-dom"
//a modifier avec les pages Articles, Places, Categories et termCa tegories

// import { Layout, Home, Adverts } from '../../pages/public/'
import Error from '../../_utils/Error'

const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="adverts" element={<Adverts />} /> */}

            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;