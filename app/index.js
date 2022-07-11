// index
// entry file for the react application

// import
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './app';
import './global';
const rootNode = document.getElementById("app");

// navigation
Quid.Component.Doc.call(document, { routeWrap: '> #app', contentType: 'json', attrTriggered: null });
Quid.Shortcut.trigSetup(document);

// initialState
const initialState = Quid.Ele.getAttr(rootNode, 'data-state', true);
Quid.Ele.removeAttr(rootNode, 'data-state');

// render
const root = createRoot(rootNode); 
root.render(<App initialState={initialState} />);