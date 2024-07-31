import React from 'react';
import { Routes, Route } from "react-router-dom"
//a modifier avec les pages Articles, Places, Categories et termCa tegories

import { Layout, Home } from '../../pages/public/'
import Categories from '../../pages/public/categories/Categories'
import Error from '../../_utils/Error'
import Articles from '../../pages/public/articles/Articles';
import Places from '../../pages/public/places/Places';

import { Monuments, Musees, Boutiques } from '.';
import { Sortir, Visiter, Art } from '.';

const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="categories" element={<Categories/>} />
            <Route path="articles" element={<Articles/>} />
            <Route path="/articles/:Aid" element={<Articles/>}/>
            <Route path="places" element={<Places/>} />
            <Route path="monuments" element={<Monuments/>} />
            <Route path="musees" element={<Musees/>} />
            <Route path="boutiques" element={<Boutiques/>} />

            <Route path="sortir" element={<Sortir/>} />
            <Route path="visiter" element={<Visiter/>} />
            <Route path="art" element={<Art/>} />

            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;