import React from 'react'
import "./Online.css"
function Online({ user }) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarProfileImg" alt="" src={user.profilePicture} />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">
                    {user.username}
                </span>
            </li>
        </div>
    )
}

export default Online
