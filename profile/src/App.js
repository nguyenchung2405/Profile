import React from 'react';
import { store } from "./redux/configStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import StepsAntd from './components/steps/Steps';
import { Routes, Route } from "react-router-dom"
import PageNotFound from './components/PageNotFound';
import TableProfiles from './components/profile/tableProfiles';
import TableDep from './components/department/TableDep';
import TablePositions from './components/positions/TablePositions';
import { checkMicroFe } from './ultils/helper';
import TablePositionsPermission from './components/permission/positions/positionTablePermission';
import PermissionTable from './components/permission/PermissionTable';
import DepartmentPermissionTable from './components/permission/department/DepartmentPermissionTable';
import RouteClient from './RouteClient';
import RouteServer from './RouteServer';

import { GET_PERMISSION_OF_USER, TOKEN } from './title/title';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';


function App() {

  const renderMF = () => {

    if (checkMicroFe() === false) {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App_Profile_service">

              <Sidebar />
              <RouteClient />
            </div>
          </BrowserRouter>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <div className="App_Profile_service">
            <RouteServer />
          </div>
        </Provider>
      )
    }
  }
  return (
    <>
      {renderMF()}
    </>

  );
}

export default App;

