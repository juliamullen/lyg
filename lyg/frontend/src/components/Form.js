import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    author: "",
    message: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({
      message: "",
      author: "",
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.reset()
    const { author, message } = this.state;
    const post = { author, message };
    const conf = {
      method: "post",
      body: JSON.stringify(post),
      headers: new Headers({ "Content-Type": "application/json" })
    };
  let charsReceived = 0;
  let result = ""
    console.table(conf)
    fetch(this.props.endpoint, conf)
    .then(response => response.body.getReader().read())
    .then(function processText({ done, value }) {
      console.log(new TextDecoder("utf-8").decode(value))
    if (done) {
      para.textContent = value;
      return;
    }

    charsReceived += value.length;
    const chunk = value;

    result += chunk;
  })

  };

  render() {
    const { name, message } = this.state;
    return (
      <section className="thread">
        <article className="post">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="author"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="message"
                onChange={this.handleChange}
                value={message}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Create new post
            </button>
          </div>
        </form>
      </article>
      </section>
    );
  }
}

export default Form;
