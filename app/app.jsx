// app
// root component which loads the correct route

// import
import { useState, useEffect } from 'react';
import Home from './route/Home';
import Error from './route/Error';
import './app.scss';

// routes
const Routes = {
    Home,
    Error
};

// export
export default function App({ initialState }) {
    if (initialState.debug === true) {
        Quid.Shortcut.d(initialState);
    }
        
    const [isLoading, setLoading] = useState(false);
    const [routeState, setRouteState] = useState(initialState);
    const RouteName = Quid.Str.typecheck(routeState.route.component, true);
    const RouteComponent = Quid.Func.typecheck(Routes[RouteName]);

    useEffect(() => {
        const initAjax = () => { setLoading(true); };
        const onResponse = (event, json) => {
            Quid.Pojo.typecheck(json, true);

            if (initialState.debug === true) {
                Quid.Shortcut.d({ ...json });
            }
                
            const newState = { ...initialState };
            newState.route = json;
            setRouteState(newState);
        }

        Quid.Shortcut.ael(document, 'doc:initAjax', initAjax);
        Quid.Shortcut.ael(document, 'doc:makeJsonResponse', onResponse);

        return () => {
            Quid.Shortcut.rel(document, 'doc:initAjax', initAjax);
            Quid.Shortcut.rel(document, 'doc:makeJsonResponse', onResponse);
        }
    }, []);

    return <RouteComponent data={routeState} />;
}