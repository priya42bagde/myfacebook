import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import React from 'react'
import "./Share.css"
function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                   <img className="shareProfileImg" src="/assets/person/userA.JPG" alt="imgs"/>
                   <input placeholder="What's in your mind..." className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                           <PermMedia htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Videos</span>
                        </div>

                        <div className="shareOption">
                           <Label htmlColor="blue"className="shareIcon"/>
                           <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                           <Room htmlColor="green" className="shareIcon"/>
                           <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                           <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                           <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <div>
                        <button className="shareButton"> Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share
