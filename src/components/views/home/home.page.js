import React, { Component } from "react";
import axios from "axios";
import Post from "../../shared/feed/post/post";
import NewPost from "../../shared/feed/newPost/newPost";
import Spinner from "../../shared/spinner/spinner-standard";
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
    return axios.get("http://54.37.228.12/api/getPosts", {
      params: { offset: this.state.offset }
    });
  }
  appendPosts() {
    let self = this;
    this.getPosts().then(response => {
      if (response.data.length) {
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
        <div className="row mt-g g-g row-p-0">
          <div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
            <div className="box s-1">
              <div className="box-head">
                Suggestions d'amis
                <i className="fas fa-users" />
              </div>
              <div className="box-content">

              </div>
            </div>
					</div>
          <div className="col-xl-6 col-lg-12">
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
          <div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block" />
        </div>
      </section>
    );
  }
}
export default HomePage;
