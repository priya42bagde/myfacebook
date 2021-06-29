import React from 'react'
import "./Feed.css"

import Share from '../share/Share'
import Post from "../post/Post"
import {Posts} from "../../dummyData"


function Feed() {
    console.log("pp", Posts)
    return (
        <div className="feed">
        <div className="feedWrapper">
            <Share />
           
             { Posts.map((p)=>(<Post post={p}  key={p.id}/>)) }
        </div>
        </div>
    )
}

export default Feed
