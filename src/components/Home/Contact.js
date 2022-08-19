import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{background:'#1E41BB', padding:'80px'}}>
            <h2 style={{marginBottom: '35px', color:'#fff'}}>Join with us</h2>
            <input style={{padding:'10px', width:'250px', borderRadius:'10px', border:'none', position:'relative'}} type="text" placeholder='Enter your Email' />

            <button style={{padding:'10px',borderRadius:'10px', border:'none',position:'absolute', marginLeft:'-30px'}}>Subscribe</button>
        </div>
    );
};

export default Contact;