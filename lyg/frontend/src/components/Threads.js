import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import Post from "./Post.js"

function Thread(props) {
  const thread = props.data
  if (thread.id) {
    return (
        <section className="thread" key={thread.id}>
          {thread.post_set.map(post => {
            return (<Post key={post.id} data={post}></Post>)
          })}
        </section>
    )
  } else {
    return (<p>Thread's dead baby</p>)
  }
}

const Threads = ({ data }) => {
  if (!data.length) {
    return (
        <p>No posts found...</p>
    )
  } else {
    return (
      <React.Fragment>
        {data.map(thread => {
          return (<Thread key={thread.id} data={thread}></Thread>)
        })}
      </React.Fragment>
    );
  }
}

Threads.propTypes = {
  data: PropTypes.array.isRequired
};

export default Threads;
