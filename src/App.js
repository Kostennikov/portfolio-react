import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, useRoutes } from "react-router-dom";

import Home from "./pages/home";
import VideoChat from "./pages/video-chat-1c";
import "./js/main";
// import history from "./history";
// import Jquery from 'jquery'\

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "video-chat-1c", element: <VideoChat /> },
  ]);
  return routes;
};

const App = () => {
  useEffect (() => {
    const currentYear = document.querySelector('.current-year');
    currentYear.append((new Date()).getFullYear());
  }) 
  
  
  
  

  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};


export default App;
