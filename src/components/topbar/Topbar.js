import React from 'react'
import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">MyFaceBook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink"> HomePage</span>
                    <span className="topbarLink"> TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge"> 1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge"> 2</span>
                    </div>

                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge"> 3</span>
                    </div>
                </div>
                <img src="/assets/person/Avatar.JPG"  alt="profile" className="topbarImage"/>
            </div>
        </div>
    )
}


export default Topbar
