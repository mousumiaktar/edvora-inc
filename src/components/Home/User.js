import React from 'react';
import './User.css';
import userimg from '../images/user.png';

const User = ({ user }) => {
    const { name, user_id } = user;
    return (
        <div className='container'>
            <div className='user-area'>
                <img style={{width:'30px'}} src={userimg} alt="" />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default User;