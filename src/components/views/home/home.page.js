import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../shared/feed/post/post';

let state = { posts: [], offset: 0, scroll: 0 }

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = state;
    }
    componentDidMount() {
        this.appendPosts();
    }
    getPosts() {
		return axios.get('http://api.njak.fr/getPosts', { params: { offset: this.state.offset } });
	}
	appendPosts() {
		let self = this
		this.getPosts().then(response => {
			if(response.data.length){
				self.setState(state => ({
					posts: [...self.state.posts, ...response.data],
					offset: [...self.state.posts, ...response.data].length
				}));
			}
		})
	}
    render() { 
        return (  
            <section id="page-content">
				<div className="row mt-g g-g px-g">
                    <div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
					</div>
					<div className="col-xl-6 col-lg-12">
						<div className={"feed-container " + this.state.view}>
                            {this.state.posts.map((post) =>
								<Post key={post.id} {...post} />
							)}
						</div>
					</div>
					<div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
					</div>
				</div>
			</section>
        );
    }
}
 
export default HomePage;