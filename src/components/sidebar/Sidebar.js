import { Bookmark, Event, Group, HelpOutline, Message, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import {Users} from "../../dummyData"
import CloseFriend from '../closefriend/CloseFriend'

function Sidebar() {
    return (
        <div className="side">
            <div className="sidebarWrapper">
                <div className="sidebarList">
                    <ul>
                        <li className="sidebarListItem">
                            <RssFeed className="sidebarIcon" />
                            <span className="sidebarListItemText">Feed</span>
                        </li>

                        
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            <span className="sidebarListItemText">Chat</span>
                        </li>

                        <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarIcon" />
                            <span className="sidebarListItemText">Videos</span>
                        </li>

                        <li className="sidebarListItem">
                            <Group className="sidebarIcon" />
                            <span className="sidebarListItemText">Groups</span>
                        </li>

                        <li className="sidebarListItem">
                            <Bookmark className="sidebarIcon" />
                            <span className="sidebarListItemText">Bookmarks</span>
                        </li>

                        <li className="sidebarListItem">
                            <HelpOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">Questions</span>
                        </li>

                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">Jobs</span>
                        </li>

                        <li className="sidebarListItem">
                            <Event className="sidebarIcon" />
                            <span className="sidebarListItemText">Events</span>
                        </li>

                        <li className="sidebarListItem">
                            <School className="sidebarIcon" />
                            <span className="sidebarListItemText">Courses</span>
                        </li>
                    </ul>
                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHr"/>
                    <ul className="sidebarFriendList"> 
                        {Users.map((u)=>(
                            <CloseFriend user={u} key={u.id}/>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
