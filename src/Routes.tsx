import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -- PAGES

import Login from './pages/admin/login';

export default function Teste(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
