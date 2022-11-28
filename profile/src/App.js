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

function App() {
  const renderMF = () => {
    if (checkMicroFe() === false) {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              abc
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
          </BrowserRouter>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <div className="App">
            <Routes>
              <Route path="/profile-service/hr/profile" element={<TableProfiles />} />
              <Route path="/profile-service/hr/profile/:proID" element={<StepsAntd />} />
              <Route path="/profile-service/hr/profile/create" element={<StepsAntd />} />
              <Route path="/profile-service/hr/profile/create/:userID" element={<StepsAntd />} />

              <Route path="/profile-service/hr/department" element={<TableDep />} />
              <Route path="/profile-service/hr/position" element={<TablePositions />} />
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


