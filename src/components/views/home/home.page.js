import React, { Component } from "react";
import axios from "axios";
import Post from "../../shared/feed/post/post";
import NewPost from "../../shared/feed/newPost/newPost";
import Spinner from "../../shared/spinner/spinner-standard";
import OnlineUsers from "../../shared/social/online-users/online-users";
let state = { posts: [], offset: 0, scroll: 0, isLoading: true };


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = state;
    this.addPost = this.addPost.bind(this);
  }
  componentDidMount() {
    this.appendPosts();
  }
  addPost(response) {
    this.setState(state => ({
      posts: [...response, ...this.state.posts]
    }))
  }
  getPosts() {
    return axios.get("/api/getPosts", {
      params: { offset: this.state.offset }
    });
  }
  appendPosts() {
    let self = this;
    this.getPosts().then(response => {
      if (response.status === 200) {
        self.setState(state => ({
          isLoading: false,
          posts: [...self.state.posts, ...response.data],
          offset: [...self.state.posts, ...response.data].length
        }));
      }
    });
  }
  render() {
    return (
      <section id="page-content">
        <div className="page-container mt-g">
          <div className="w-100"></div>
          <div className="main-width">
            <NewPost addPost={this.addPost}/>
            <div className={"feed-container " + this.state.view}>
              { this.state.isLoading ? 
              <div className="d-flex justify-content-center w-100"><Spinner /></div>
              :this.state.posts.map(post => (
                <Post key={post.id} {...post} />
              ))
              }
            </div>
          </div>
          <div className="w-100"></div>
        </div>
      </section>
    );
  }
}
export default HomePage;
