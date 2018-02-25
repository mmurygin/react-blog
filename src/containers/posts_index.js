import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from '../components/post';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let post;
    const posts = Object.keys(this.props.posts).map(key => {
      post = this.props.posts[key];

      return <Post post={post} key={post.id} />
    });

    return (
      <div className='row'>
        {posts}
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
