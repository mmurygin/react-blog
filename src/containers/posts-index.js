import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions';
import Post from '../components/post';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = _.map(this.props.posts, post => {
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
