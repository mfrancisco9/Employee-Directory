import React from 'react';

const Table = (props) => {
    return (
    <table className="table table-sortable text-center">
        <thread>
            <tr>
                <th scope="col"
                    date-field="name"
                    data-sortable="true">
                    <span>Name</span>
                </th>
                
                <th scope="col">
                    <span>Image</span>
                </th>
                
                <th scope="col">
                    <span>Email</span>
                </th>

                <th scope="col">
                    <span>Date of Birth</span>
                </th>
            </tr>
        </thread>
        <tbody>
            
        </tbody>



    </table>
)
}

export default Table;