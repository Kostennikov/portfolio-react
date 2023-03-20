import React, { useEffect } from 'react';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
// import createStore, { applyMiddleware } from 'redux';
// import { langReducer } from './rootReducer';
// import { changeLang } from './actions';
import "./js/main";
import Home from "./pages/home";
import Poetry from "./pages/poetry";
import VideoChat from "./pages/video-chat-1c";
import CleverenceRedesign from './pages/cleverence-redesign';
import Prosto from "./pages/prosto";
// import logger from 'redux-logger';
// import history from "./history";
// import Jquery from 'jquery'\
// const store = createStore(langReducer, 'ru', applyMiddleware(logger));


 
// store.subscribe(() => {
//   const state = store.getState()
//   document.body.className = state.theme.value;
// })
// document.querySelector('.knopka').addEventListener('click', () => {
//   store.dispatch(changeLang())
// })  

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "video-chat-1c", element: <VideoChat /> },
    { path: "poetry", element: <Poetry /> },
    { path: "cleverence-redesign", element: <CleverenceRedesign /> },
    { path: "prosto", element: <Prosto /> },
  ]);
  return routes;
};

const App = () => {
  useEffect (() => {
    // const currentYear = document.querySelector('.current-year');
    // currentYear.append((new Date()).getFullYear());
    // console.log(currentYear.append((new Date()).getFullYear()))
    // let date = new Date().getFullYear();
    // document.querySelector('.current-year').innerHTML = '&nbsp;' + date;
  }) 

  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
