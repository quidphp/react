// index
// entry file for the react application

// import
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './app';
import './global';
const rootNode = document.getElementById("app");
let root = Quid.Ele.getData(rootNode,"react-root");

if(root != null)
root.render(<App />);

else
{
    // navigation
    Quid.Component.Doc.call(document, { routeWrap: '> #app', contentType: 'json', attrTriggered: null });
    Quid.Shortcut.trigSetup(document);

    // initialState
    const initialState = Quid.Ele.getAttr(rootNode, 'data-state', true);
    Quid.Ele.removeAttr(rootNode, 'data-state');

    // render
    root = createRoot(rootNode); 
    root.render(<App />);
    Quid.Ele.setData(rootNode,"react-root",root);
    
    // mutate store
    Quid.Shortcut.ael(document, 'doc:initAjax', function () {
        
    });
    Quid.Shortcut.ael(document, 'doc:makeJsonResponse', function (event, json) {
    });
}

// fix for hot
if(process.env.NODE_ENV === 'development' && module.hot) 
module.hot.accept();