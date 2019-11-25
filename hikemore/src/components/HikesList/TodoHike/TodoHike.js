import React from 'react';

const todoHike = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Trail Name</th>
                    <th>Length</th>
                    <th>Elevation Gain</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Mark as Completed</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

            <tr>
                <td>Mailbox</td>
                <td>9.4 Miles</td>
                <td>4000ft.</td>
                <td>Snoqualmie</td>
                <td>4.2 Stars</td>
                <td><button>Completed</button></td>
                <td><button>Delete</button></td>
            </tr>  
            </tbody>
        </table>
    );
};

export default todoHike;
    

