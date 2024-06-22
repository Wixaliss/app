import React from 'react';
import './profile.css';
import ava from '../../img/Elon_Musk_Royal_Society.jpg';
import ava_mini from '../../img/Elon_Musk_Royal_Society-mini.jpg';

function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img className="ava" src={ava} alt="profile mini photo" />
        <p>Elon Mask</p>
      </div>
      <div className="posts">
        <h2>My posts</h2>
        <input placeholder="enter the post" />
        <button>Add post</button>
        <div className="post">
          <img className="ava_mini" src={ava_mini} alt="profile mini photo" />
          <span>Elon Mask</span>
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
