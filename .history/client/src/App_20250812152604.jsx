import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Registration1 from "./job seeker/UserRegistration";
import Registration from "./job giver/Registration";
import Login1 from "./job seeker/UserLogin";
import Login from "./job giver/Login";
import CreateJob from "./job giver/CreateJob";
import Job from "./job giver/Job";
import Profile from "./job giver/Profile";
import Home from "./Home";
import UrgentHiring from "./job giver/UrgetHiring";
import JobGiverLanding from "./job giver/JobGiverLanding";
import Reviews from "./job giver/Reviews";
import UserRegistration from "./job seeker/UserRegistration";
import Landing from "./job seeker/Landing";
import AboutJob from "./job seeker/AboutJob";
import CompanyProfile from "./job seeker/CompanyProfile";
import UserProfile from "./job seeker/UserProfile";
import AllJobs from "./job seeker/AllJobs";
import UserLogin from "./job seeker/UserLogin";
import InstantJobs from "./job seeker/InstantJobs";
import Admin from "./Admin";
import Update from "./job giver/Update";
import UpdateProfile from "./job giver/UpdateProfile";
import UserUpdateProfile from "./job seeker/UserUpdateProfile";
import AppliedAll from "./job seeker/AppliedAll";
import Applied from "./job giver/Applied";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />

          {/* Job Giver */}
          <Route path="/companyRegistration" element={<Registration />} />
          <Route path="/companyLogin" element={<Login />} />
          <Route path="/createJob/:id" element={<CreateJob />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/urgentHiring" element={<UrgentHiring />} />
          <Route path="/landing" element={<JobGiverLanding />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/updateProfile/:id" element={<UpdateProfile />} />
          <Route path="/appliedJobs/:id" element={<Applied />} />

          {/* Job Seeker */}
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/userLanding" element={<Landing />} />
          <Route path="/aboutJob/:id" element={<AboutJob />} />
          <Route path="/InstantJobs" element={<InstantJobs />} />
          <Route path="/companyProfile/:id" element={<CompanyProfile />} />
          <Route path="/userProfile/:id" element={<UserProfile />} />
          <Route path="/allJobs" element={<AllJobs />} />
          <Route
            path="/userupdateProfile/:id"
            element={<UserUpdateProfile />}
          />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/appliedJobs/:id" element={<AppliedAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
