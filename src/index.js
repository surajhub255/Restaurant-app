import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateProvider } from './components/context/StateProvider';
import { initialState } from './components/context/initialState';
import reducer from './components/context/reducer';

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer} >
            <App />
        </StateProvider>
    </Router>
);


