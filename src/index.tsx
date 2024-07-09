import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "./provider/ThemeProvider";
import {store} from "./store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ThemeProvider><App/></ThemeProvider>
            </Router>
        </Provider>,
    </React.StrictMode>
);

