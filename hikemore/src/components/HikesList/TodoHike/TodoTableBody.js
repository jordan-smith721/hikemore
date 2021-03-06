import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const todoTableBody = (props) => {
    return (
        <tr>
            <td><button className="border-0 bg-white" onClick={props.clicked}><FontAwesomeIcon className="delete-btn" icon={faMinusCircle} /></button> </td>
            <td>{props.trailName}</td>
            <td>{props.length} Miles</td>
            <td>{props.elevation} ft.</td>
            <td>{props.location}</td>
            <td>{props.rating} Stars</td>
            <td><Button onClick={props.completed} className="btn-completed">Completed</Button></td>
        </tr> 
    );
};

export default todoTableBody;