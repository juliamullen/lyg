import React from "react";

function Post(props) {
  return (
        <article className="post">
          <span className="author">{props.data.author}</span>
          <span className="id">{props.data.id}</span>
          <span className="message">{props.data.message}</span>
          {props.data.comment_set.map(comment => {
            return (<aside className="comment">{comment.message}</aside>)
          })}

        </article>
  )

}

export default Post;
