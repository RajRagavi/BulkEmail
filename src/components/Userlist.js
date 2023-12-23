import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const UserList = () => {
  const [userList, setUserList] = useState([]);

    useEffect(() => {
      const fetchUserList = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/user');
          setUserList(response.data);
        } catch (error) {
          console.error('Error fetching user list:', error);
        }
      };
  
      fetchUserList();
    }, []);

  return (
    <div>
    <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
        <th scope='col'>User Name</th>
        <th scope='col'>Email</th>
       
      </tr>
    </MDBTableHead>
    <MDBTableBody>
    {userList.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
     
    </MDBTableBody>
  </MDBTable>
    </div>
  );
};

export default UserList;
