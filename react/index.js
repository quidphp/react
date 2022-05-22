// import
import React from "react";
import { createRoot } from 'react-dom/client';
import "./global.js";
import App from "./app.js";

// navigation
Quid.Component.Doc.call(document, { routeWrap: '> #app', contentType: 'json', attrTriggered: null });
Quid.Shortcut.trigSetup(document);

// initialState
const rootNode = Quid.Shortcut.qs(document, '#app');
const initialState = Quid.Ele.getAttr(rootNode, 'data-state', true);
Quid.Ele.removeAttr(rootNode, 'data-state');

// render
const root = createRoot(rootNode); 
root.render(<App />);

// mutate store
Quid.Shortcut.ael(document, 'doc:initAjax', function () {
    
});
Quid.Shortcut.ael(document, 'doc:makeJsonResponse', function (event, json) {
    
});

// fix for hot
if(process.env.NODE_ENV === 'development' && module.hot) 
module.hot.accept();