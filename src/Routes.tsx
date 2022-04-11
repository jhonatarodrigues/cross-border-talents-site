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
import Companies from './pages/admin/companies';
import CompaniesRegister from './pages/admin/companiesRegister';
import Candidates from './pages/admin/candidates';
import CandidatesRegister from './pages/admin/candidatesRegister';
import InterestSkills from './pages/admin/interestSkills';
import InterestSkillsRegister from './pages/admin/interestSkillsRegister';
import Jobs from './pages/admin/jobs';
import JobsRegister from './pages/admin/jobsRegister';
import Testimonials from './pages/admin/testimonials';
import TestimonialsRegister from './pages/admin/testimonialsRegister';

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

          <Route path="companies" element={<Companies />} />
          <Route path="companies/register" element={<CompaniesRegister />} />

          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/register" element={<CandidatesRegister />} />

          <Route path="departament" element={<InterestSkills />} />
          <Route
            path="departament/register"
            element={<InterestSkillsRegister />}
          />

          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/register" element={<JobsRegister />} />

          <Route path="testimonials" element={<Testimonials />} />
          <Route
            path="testimonials/register"
            element={<TestimonialsRegister />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
