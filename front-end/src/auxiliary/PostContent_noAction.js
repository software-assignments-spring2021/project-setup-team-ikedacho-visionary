
import './PostContent_noAction.css'
import PostContent_img_na from '../auxiliary/PostContent_img_na'
const PostContent_noAction = (props) => {
   let contentimgs=[];
   contentimgs=props.contentimg;
  return (
    <div class="PostContent_noAction">
        <strong class="PlatformSource">{props.source}</strong>
        <div class = "block_noAction">
    <img class="userimg" src={props.userimg} />
        <div class="Text">
        <strong class = "username">{props.UserName}</strong>
        <p>{props.Senttime}</p>
    </div>
</div>

        <p class = "postcontent_noAction">{props.content}</p>
        <div class="imageimport" >
        {contentimgs.map((img)=>(
                <PostContent_img_na 
  
                key ={img.id} 
                contentimg={img} />
                ))}
                </div>

    </div>
  )
}



export default PostContent_noAction
