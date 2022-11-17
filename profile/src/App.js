import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import StepsAntd from './components/steps/Steps';
import { Routes, Route } from "react-router-dom"
import PageNotFound from './components/PageNotFound';
import TableProfiles from './components/profile/tableProfiles';
import TableDep from './components/department/TableDep';
import TablePositions from './components/positions/TablePositions';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/hr/profile" element={<TableProfiles />} />
        <Route path="/hr/profile/:proID" element={<StepsAntd />} />
        <Route path="/hr/profile/create" element={<StepsAntd />} />
        <Route path="/hr/profile/create/:userID" element={<StepsAntd />} />

        <Route path="/hr/department" element={<TableDep />} />
        <Route path="/hr/position" element={<TablePositions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
