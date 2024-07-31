import React from 'react';
import { Routes, Route } from "react-router-dom"
//a modifier avec les pages Articles, Places, Categories et termCa tegories

import { Layout, Home } from '../../pages/public/'
import Categories from '../../pages/public/categories/Categories'
import Error from '../../_utils/Error'
import Articles from '../../pages/public/articles/Articles';

const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="categories" element={<Categories/>} />
            <Route path="articles" element={<Articles/>} />
            <Route path="/articles/:Aid" element={<Articles/>}/>


            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;