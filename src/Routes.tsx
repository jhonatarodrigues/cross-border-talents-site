import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from './store';
import RouteAccess from './components/routeAccess';

// -- PAGES
import Dash from './pages/dash';
import ForEmployers from './pages/forEmployers';
import TalentPool from './pages/talentPool';
import TopCandidates from './pages/topCandidates';
import CompanyNeed from './pages/companyNeed';
import OurItAcademy from './pages/ourItAcademy';
import Contact from './pages/contact';
import TestimonialsPage from './pages/testimonials';
import MeetCompany from './pages/meetCompany';
import RegisterTalentPool from './pages/registerTalentPool';
import JobsInternal from './pages/jobsInternal';
import TalentAcquisition from './pages/talentAcquisition';
import AcceptBusiness from './pages/acceptBusiness';

// -- admin pages
import Index from './pages/admin';
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
import TalentPoolAdmin from './pages/admin/talentPool';

export default function Teste(): JSX.Element {
  const { auth } = useSelector((state: ApplicationState) => state);

  const { accessLevel } = auth.user || 0;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/jobs" element={<ForEmployers />} />
        <Route path="/jobs/internal" element={<JobsInternal />} />
        <Route path="/for-employers" element={<TalentPool />} />
        <Route path="/talent-pool" element={<TopCandidates />} />
        <Route path="/talent-pool/preview" element={<CompanyNeed />} />
        <Route path="/academy" element={<OurItAcademy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/about-us" element={<MeetCompany />} />
        <Route
          path="/registerTalentPool/:token"
          element={<RegisterTalentPool />}
        />
        <Route path="/AcceptBusiness/:token" element={<AcceptBusiness />} />
        {/* <Route path="/talentAcquisition" element={<TalentAcquisition />} /> */}

        <Route path="/admin">
          <Route path="login" element={<Login />} />

          <Route
            path="user"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <User />
              </RouteAccess>
            }
          />
          <Route
            path="user/register"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <UserRegister />
              </RouteAccess>
            }
          />

          <Route
            path="teamLeader"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <TeamLeader />
              </RouteAccess>
            }
          />
          <Route
            path="teamLeader/register"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <TeamLeaderRegister />
              </RouteAccess>
            }
          />

          <Route
            path="recruiter"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <Recruiter />
              </RouteAccess>
            }
          />
          <Route
            path="recruiter/register"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <RecruiterRegister />
              </RouteAccess>
            }
          />

          <Route
            path="companies"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1, 2]}>
                <Companies />
              </RouteAccess>
            }
          />
          <Route
            path="companies/register"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1, 2]}>
                <CompaniesRegister />
              </RouteAccess>
            }
          />

          <Route
            path="candidates"
            element={
              <RouteAccess
                authAccessLevel={accessLevel}
                accessLevel={[1, 2, 3, 4, 5]}
              >
                <Candidates />
              </RouteAccess>
            }
          />
          <Route
            path="candidates/register"
            element={
              <RouteAccess
                authAccessLevel={accessLevel}
                accessLevel={[1, 2, 3]}
              >
                <CandidatesRegister />
              </RouteAccess>
            }
          />

          <Route
            path="departament"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <InterestSkills />
              </RouteAccess>
            }
          />
          <Route
            path="departament/register"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <InterestSkillsRegister />
              </RouteAccess>
            }
          />

          <Route
            path="jobs"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <Jobs />
              </RouteAccess>
            }
          />
          <Route
            path="jobs/register"
            element={
              <RouteAccess authAccessLevel={accessLevel} accessLevel={[1]}>
                <JobsRegister />
              </RouteAccess>
            }
          />

          <Route
            path="testimonials"
            element={
              <RouteAccess
                authAccessLevel={accessLevel}
                accessLevel={[1, 2, 3]}
              >
                <Testimonials />
              </RouteAccess>
            }
          />
          <Route
            path="testimonials/register"
            element={
              <RouteAccess
                authAccessLevel={accessLevel}
                accessLevel={[1, 2, 3]}
              >
                <TestimonialsRegister />
              </RouteAccess>
            }
          />

          <Route
            path="talent-pool"
            element={
              <RouteAccess
                authAccessLevel={accessLevel}
                accessLevel={[1, 2, 4]}
              >
                <TalentPoolAdmin />
              </RouteAccess>
            }
          />
          <Route path="" element={<Index />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
