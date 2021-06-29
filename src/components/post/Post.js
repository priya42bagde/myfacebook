import { MoreVert } from '@material-ui/icons'
import React, {useState} from 'react'
import "./Post.css"
import { Users } from "../../dummyData"


function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? (like-1) : (like+1))
        setIsLiked(!isLiked)
    }
    //const user = Users.filter(u => u.id === 1)
   // console.log(user[0].username)
    console.log("{posts}",{post})
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={ Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername"> { Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} className="postImg" alt="img" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={likeHandler} src="/assets/post/like.png" alt="like" className="likeIcon" />
                        <img onClick={likeHandler} src="assets/post/heart.png" alt="heart" className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post
