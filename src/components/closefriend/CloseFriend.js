import React from 'react'
import "./CloseFriend.css"
function CloseFriend({user}) {
    return (
        <div>
             <li className="sidebarFriendListItem">
                           <img className="sidebarFriendImg" src={user.profilePicture} alt=""/>
                           <span className="sidebarFriendName">{user.username}</span>
               </li>

        </div>
    )
}

export default CloseFriend
