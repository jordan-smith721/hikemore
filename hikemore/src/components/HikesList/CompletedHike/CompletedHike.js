import React from 'react';

const completedHike = (props) => {
    return (
        <table>
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
        </table>
    );
};

export default completedHike;
    

