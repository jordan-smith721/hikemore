import React from 'react';
import Aux from '../hoc/Auxillary';
import './Layout.css';
import Header from '../components/Header/Header.js';

const layout = (props) => (
    <Aux>
        <Header />
        <main className="content-container">
            {props.children}
        </main>
    </Aux>
);

export default layout;