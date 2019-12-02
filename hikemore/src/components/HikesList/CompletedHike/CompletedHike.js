import React from 'react';
import Table from 'react-bootstrap/Table';

const completedHike = (props) => {
    return (
        <Table className="hike-table my-3" responsive>
            <thead>
            <tr>
                <th>Trail Name</th>
                <th>Length</th>
                <th>Elevation Gain</th>
                <th>Location</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Mailbox</td>
                <td>9.4 Miles</td>
                <td>4000ft.</td>
                <td>Snoqualmie</td>
                <td>4.2 Stars</td>
            </tr>  
            </tbody>
        </Table>
    );
};

export default completedHike;
    

