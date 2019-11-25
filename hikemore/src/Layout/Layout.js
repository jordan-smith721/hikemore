import React from 'react';
import Aux from '../hoc/Auxillary';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Header here</div>
        <main className="content-container">
            {props.children}
        </main>
    </Aux>
);

export default layout;