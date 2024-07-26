import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ALayout, Dashboard } from '../admin'
//modifier cette ligne pour Article, Places, Categories, TermCategories
// import {Books, CreateBook, BAdd} from '../admin/books'
import { User, UEdit, UAdd } from '../admin/user'

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
                {/* <Route path="books">
                    <Route path="index" element={<Books/>}/>
                    <Route path="/books/create" element={<CreateBook/>}/>
                    <Route path="ajout" element={<BAdd/>}/>
                </Route> */}

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;