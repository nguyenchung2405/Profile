import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./redux/configStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );
// root.render(
//   <App />
// );

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
