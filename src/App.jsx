import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import "./App.css";
import Allpages from "./allpage";
import GiveOtp from "./GiveOtp";
import { Profile } from "./Profile";
// import Otp from "./otp";



const Dashboard = () => {
 

  return (
   <Router>
    {/* kjgfkhgrfkj */}
    <Routes>
    <Route path="/" element={<Allpages />} />
    <Route path="/Otp" element={<GiveOtp/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    </Routes>
   </Router>
  );
};

export default Dashboard;
