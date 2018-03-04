import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      categories: '',
      content: '',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state.title, this.state.categories,
       this.state.content);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} method='POST'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value})} />
        </div>
        <div className='form-group'>
          <label htmlFor='categories'>Categories</label>
          <input
            type='text'
            className='form-control'
            id='categories'
            placeholder='Categories'
            value={this.state.categories}
            onChange={e => this.setState({ categories: e.target.value })} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea
            className='form-control'
            rows='3'
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <button type='reset' className='btn btn-secondary'>Reset</button>
      </form>
    );
  }
}

export default connect(null, { createPost })(PostNew);
