import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import DashboardProjects from './DashboardProjects';

function Dashboard() {
   return (
     <div>
       <h2>Dashboard</h2>
       <nav>
         <Link to="..">Dashboard Home</Link>
       </nav>
     </div>
   );
 }

export default Dashboard;