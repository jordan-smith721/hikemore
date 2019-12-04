import React from 'react';

const completedTableBody = (props) => {
    return (
        <tr>
            <td>{props.trailName}</td>
            <td>{props.length} Miles</td>
            <td>{props.elevation} ft.</td>
            <td>{props.location}</td>
            <td>{props.rating} Stars</td>
        </tr> 
    );
};

export default completedTableBody;