import "./Profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import React from 'react'

function Profile() {
    return (
        <div>
            <div>
                <Topbar />
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" src="/assets/post/3.jpeg" alt="" />
                                <img className="profileUserImg" src="/assets/person/Avatar.JPG" alt="" />

                            </div>
                        <div className="profileInfo">
                             <h4 className="profileInfoName"> Developer Priya</h4>
                             <span className="profileInfoDescription">Hello !!</span>
                        </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed />
                            <Rightbar profile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile