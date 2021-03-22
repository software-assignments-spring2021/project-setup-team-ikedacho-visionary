import './PostContent.css'
import Repost from './ToRepost'
import React, { useState, useEffect } from 'react'
import ToComment from './ToComment'
import { Link } from 'react-router-dom'

const PostContent = (props) => {

    const [state, setState] = useState({
        showRepost: false,
        showComment: false
      })

    const [like, setLike] = useState({
        liked: false
    })
 

  const _showRepost = () => {
    let cur = state.showRepost
    setState({
      showRepost: !cur
    });
  };
  const _showComment = () => {
    let cur = state.showComment
    setState({
      showComment: !cur
    });
  };
  const _setLike = (e) => {
    let cur = like.liked
    setLike({
      liked: !cur

    });
    if(cur == false){

     e.target.style.backgroundColor = '#e37568';
    }
    else if(cur == true){
      console.log("unliked");
      e.target.style.backgroundColor = '#e7e7e7';
    }
    
  };

  return (
    <div className="PostContent" >
     
      <strong className = "PlatformSource">{props.source}</strong>
    
      <div className = "block"  onClick={() => window.location.href = '/friend_profile'} to = {'/friend_profile'}>
     
          <img className = "userimg" src = {props.userimg} />
        
        
        <div className="Text">
          <strong className = "username">{props.UserName}</strong>
          <p className = "time">{props.Senttime}</p>
        </div>
      
      </div>

      <div onClick={() => window.location.href = '/detailpost'} to = {'/detailpost'}>
      
        <p className = "postcontent">{props.content}</p>
        <img className="contentimg" src={props.contentimg} />


        </div>
        
        <div className = "footer">
            <button className = "Commentbutton" onClick = {_showComment.bind()}> Comment</button>

            <button className = "Likebutton" onClick = {_setLike.bind()}>{like.liked ? 'Liked' : 'Like'}</button>
            <button className = "Repostbutton" onClick = {_showRepost.bind()}> Repost</button>
            {state.showRepost && (
              <>
                <Repost />
              </>
            )}
            {state.showComment && (
              <>
                <ToComment />
              </>
            )}
        </div>
      
    </div>
  )
}



export default PostContent
