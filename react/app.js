// import
import "./global.js";

// navigation
Quid.Component.Doc.call(document, { routeWrap: '> #app', contentType: 'json', attrTriggered: null });
Quid.Shortcut.trigSetup(document);

// initialState
const rootNode = Quid.Shortcut.qs(document, '#app');
const initialState = Quid.Ele.getAttr(rootNode, 'data-state', true);
Quid.Ele.removeAttr(rootNode, 'data-state');