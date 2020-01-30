import React from "react";

function Post(props) {
  console.warn('hi')
  console.log("post", props)
  return (
        <article className="post">
          <span className="author">{props.data.author}</span>
          <span className="id">{props.data.id}</span>
          <span className="message">{props.data.message}</span>

          {props.comment_set ? <p></p> : props.comment_set.map(comment => {
          return (<aside key={comment.id}>{comment.message}</aside>)
        })}
        </article>
  )

}

export default Post;
