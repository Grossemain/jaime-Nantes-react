import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ALayout, Dashboard } from '../admin'
//modifier cette ligne pour Article, Places, Categories, TermCategories
import {TermCategories,TCAdd,TCEdit} from '../admin/termCategories'
// import { User, UEdit, UAdd } from '../admin/user'

import Error from '../../_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                {/* <Route path="users">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<UEdit/>}/>
                    <Route path="add" element={<UAdd/>}/>
                </Route> */}
                <Route path="termcategories">
                    <Route path="index" element={<TermCategories/>}/>
                    <Route path="/termcategories/create" element={<TCAdd/>}/>
                    <Route path="/termcategories/edit/:TCid" element={<TCEdit/>}/>
                </Route>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;