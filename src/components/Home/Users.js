import React, { useEffect, useState } from 'react';
import User from './User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://assessment.api.vweb.app/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div className= 'mt-5 users-area'>
            <h1 style={{color:'#42C3CF'}}>Our Users - {users.length}</h1>
            <div className='all-users mt-5'>
                {
                    users.map(user=> <User
                    key={user.user_id}
                    user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;