'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Form from "./components/Form";
import Door from "./components/Door";
import Vis from "./components/Vis";
import Storm from "./components/Storm";

// const target = document.body;
const target = document.getElementById('root');

const node = (
    <App>
        <Form/>
        <Door/>
        <Vis/>
        <Storm/>
    </App>
);
/*
 <App>

 <Storm/>
 </App>
 */
/*<Form/>
 <Door/>
 <Vis/>*/
ReactDOM.render(node, target);