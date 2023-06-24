import React from 'react';
import { store } from "./redux/configStore"
import { Provider, useSelector } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { checkMicroFe } from './ultils/helper';
import RouteClient from './RouteClient';
import RouteServer from './RouteServer';


function App() {
  const renderMF = () => {
    console.log(checkMicroFe())
    if (checkMicroFe() === false) {
      return (
        <Provider store={store}>
          <Router>
            <div className="App_Profile_service">

              <Sidebar />
              <RouteClient />
            </div>
          </Router>
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

