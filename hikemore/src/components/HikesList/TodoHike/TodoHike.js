import React from 'react';
import Table from 'react-bootstrap/Table';
import Aux from '../../../hoc/Auxillary';
import './TodoHike.css';
import AddModal from '../../AddHikeModal/AddHikeModal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const todoHike = (props) => {
    return (
        <Aux>
            <Table className="hike-table" responsive>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Trail Name</th>
                        <th>Length</th>
                        <th>Elevation Gain</th>
                        <th>Location</th>
                        <th>Rating</th>
                        <th>Mark as Completed</th>
                    </tr>
                </thead>
                <tbody>

                <tr>
                    <td><FontAwesomeIcon icon={faMinusCircle} className="delete-btn" /></td>
                    <td>Mailbox</td>
                    <td>9.4 Miles</td>
                    <td>4000ft.</td>
                    <td>Snoqualmie</td>
                    <td>4.2 Stars</td>
                    <td><Button className="btn-completed">Completed</Button></td>
                </tr>  
                </tbody>
            </Table>
            <AddModal />
        </Aux>
    );
};

export default todoHike;
    

