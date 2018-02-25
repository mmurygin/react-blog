import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div className='row'>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}
