import React, { Component } from "react";
import axios from "axios";
import Post from "../../shared/feed/post/post";
import NewPost from "../../shared/feed/newPost/newPost";
import UserCard from "../../shared/user/userCard/userCard";

let state = { posts: [], offset: 0, scroll: 0 };

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
    return axios.get("http://api.njak.fr/getPosts", {
      params: { offset: this.state.offset }
    });
  }
  appendPosts() {
    let self = this;
    this.getPosts().then(response => {
      if (response.data.length) {
        self.setState(state => ({
          posts: [...self.state.posts, ...response.data],
          offset: [...self.state.posts, ...response.data].length
        }));
      }
    });
  }
  render() {
    return (
      <section id="page-content">
        <div className="row mt-g g-g px-g">
          <div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
						<UserCard />
					</div>
          <div className="col-xl-6 col-lg-12">
            <NewPost addPost={this.addPost}/>
            <div className={"feed-container " + this.state.view}>
              {this.state.posts.map(post => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </div>
          <div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block" />
        </div>
      </section>
    );
  }
}

export default HomePage;
