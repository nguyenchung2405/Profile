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

function App() {
  const renderMF = () => {
    if (checkMicroFe() === false) {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App_Profile_service">
              
              <Sidebar />
              <Routes>
                <Route path="/hr/profile" element={<TableProfiles />} />
                <Route path="/hr/profile/:proID" element={<StepsAntd />} />
                <Route path="/hr/profile/create" element={<StepsAntd />} />
                <Route path="/hr/profile/create/:userID" element={<StepsAntd />} />
                <Route path="/myprofile/:User_ID" element={<StepsAntd />} />

                <Route path="/hr/department" element={<TableDep />} />
                <Route path="/hr/position" element={<TablePositions />} />
                <Route path="/hr/permission/manage" element={<PermissionTable /> } />
                <Route path="/hr/permission/position" element={<TablePositionsPermission /> } />
                <Route path="/hr/permission/department-position" element={<DepartmentPermissionTable /> } />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <div className="App_Profile_service">
            <Routes>
              <Route path="/hr/profile" element={<TableProfiles />} />
              <Route path="/hr/profile/:proID" element={<StepsAntd />} />
              <Route path="/hr/profile/create" element={<StepsAntd />} />
              <Route path="/hr/profile/create/:userID" element={<StepsAntd />} />
              <Route path="/myprofile/:User_ID" element={<StepsAntd />} />

              <Route path="/hr/department" element={<TableDep />} />
              <Route path="/hr/position" element={<TablePositions />} />
              <Route path="/hr/permission/manage" element={<PermissionTable /> } />
              <Route path="/hr/permission/position" element={<TablePositionsPermission /> } />
              <Route path="/hr/permission/department-position" element={<DepartmentPermissionTable /> } />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
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
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       App
//     </div>
//   );
// }

// export default App;


