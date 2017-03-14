'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Vis from "./components/Vis";
import Storm from "./components/Storm";

// const target = document.body;
const target = document.getElementById('root');

const node = (
    <App>
        <Vis/>
        <Storm/>
    </App>
);

ReactDOM.render(node, target);