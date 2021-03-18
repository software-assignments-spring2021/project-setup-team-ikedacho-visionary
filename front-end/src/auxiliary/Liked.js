import React from 'react'
import { Link } from 'react-router-dom'
import './Liked.css'

const Liked = (props) => {
  // console.log(props);

  // inject a random placeholder image from the Lorem Picsum API
  // the mockaroo API we're using doesn't include this
  // ultimately, this data would come from the API

  return (
    <article className="liked">
        <Link to={`/profile/${props.details.liked_by}`}>
            <div>
                <img class='inline-block' src={props.details.liked_by_profile_image} />
                <h1 class='inline-block' >{props.details.liked_by_username}</h1>
                <span id="commented_date">{props.details.liked_date}</span>
            </div>
        
        <p id='like'>Like the post</p>
       
        </Link>

        <Link to={`/post_content/${props.details.post_text}`}>
            
                
                <p id='post' >

                <img id="post_image" src={props.details.post_image} />
                <br></br>
                <span id='username'>@Username</span>
                <br></br>
                <br></br>
                <div id='post_text'>{props.details.post_text}</div>
                </p>
                
         
        </Link>

    </article>
  )
}

// make this function available to be imported into another module
export default Liked