import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -- PAGES

import Login from './pages/admin/login';

import User from './pages/admin/user';
import UserRegister from './pages/admin/userRegister';
import NotFound from './pages/admin/notFound';
import TeamLeader from './pages/admin/teamLeader';
import TeamLeaderRegister from './pages/admin/teamLeaderRegister';
import Recruiter from './pages/admin/recruiter';
import RecruiterRegister from './pages/admin/recruiterRegister';

export default function Teste(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="login" element={<Login />} />

          <Route path="user" element={<User />} />
          <Route path="user/register" element={<UserRegister />} />

          <Route path="teamLeader" element={<TeamLeader />} />
          <Route path="teamLeader/register" element={<TeamLeaderRegister />} />

          <Route path="recruiter" element={<Recruiter />} />
          <Route path="recruiter/register" element={<RecruiterRegister />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
