import React, { useContext } from 'react';
import {UserContext} from './UserConetext'


const Users = () => {
    const content = useContext(UserContext);

    const handleLogin = () => {
      if(content){
        content.setUser({
            name: 'folly',
            email: 'folly@gmail.com' // Added missing .com in the email
        });
      }
    };

    const handleLogout = () => {
        if(content){
            content.setUser(null);
          }
    };

    return (
        <div>
            <h2>Users</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>Users name is {content?.user?.name}</h1> {/* Display user's name */}
            <h1>Users name is {content?.user?.email}</h1> {/* Display user's name */}
        </div>
    );
};

export default Users; // Moved export statement here
