import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -- PAGES

import Login from './pages/admin/login';
import User from './pages/admin/user';

export default function Teste(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="login" element={<Login />} />

          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
