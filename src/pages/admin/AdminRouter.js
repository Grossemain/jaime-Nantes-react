import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ALayout, Dashboard } from '../admin'
//modifier cette ligne pour Article, Places, Categories, TermCategories
import {TermCategories,TCAdd,TCEdit} from '../admin/termCategories'
import {Categories,CAdd,CEdit} from '../admin/categories'
import {Articles,AAdd} from '../admin/articles'
import {Places,PAdd} from '../admin/places'
import { User, UEdit} from '../admin/user'

import Error from '../../_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="users">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<UEdit/>}/>
                </Route>
                <Route path="termcategories">
                    <Route path="index" element={<TermCategories/>}/>
                    <Route path="/termcategories/create" element={<TCAdd/>}/>
                    <Route path="/termcategories/edit/:TCid" element={<TCEdit/>}/>
                </Route>
                <Route path="categories">
                    <Route path="index" element={<Categories/>}/>
                    <Route path="/categories/create" element={<CAdd/>}/>
                    <Route path="/categories/edit/:Cid" element={<CEdit/>}/>
                </Route>
                <Route path="articles">
                    <Route path="index" element={<Articles/>}/>
                    <Route path="/articles/create" element={<AAdd/>}/>
                    {/* <Route path="/categories/edit/:Cid" element={<CEdit/>}/> */}
                </Route>
                <Route path="places">
                    <Route path="index" element={<Places/>}/>
                    <Route path="/places/create" element={<PAdd/>}/>
                    {/* <Route path="/categories/edit/:Cid" element={<CEdit/>}/> */}
                </Route>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;