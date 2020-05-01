import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion"
import moment from 'moment';
import './comments.scss';
import axios from "axios";
import PostComments from './postComments/postComments';
import AnimateHeight from 'react-animate-height';
import { getAvatarUrl } from "../../../../services/profile/avatarService";
import Spinner from "../../spinner/spinner-standard";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            loading: true,
            idpost: this.props.idpost,
            height: 0
        }
    }

    componentDidMount() {
        this.setState({
            height: "auto"
        })
        this.appendComments();
    }

    getComments() {
        return axios.get("/api/getComments?post=" + this.state.idpost, {
        });
    }
    parseDates(items) {
        return items.map((item) => {
            item.on_date = moment(item.on_date).fromNow();
            return item
        })
    }
    appendComments() {
        this.getComments().then(response => {
            if (response.status === 200) {
                this.setState(state => ({
                    comments: [...this.state.comments, ...this.parseDates(response.data)],
                    loading: false
                }));
            }
            this.setState({
                height: 'auto'
            })
        });
        
    }
    newComment = (data) => {
        this.setState(state => ({
            comments: [...this.state.comments, ...data]
        }));
    }
    render() {
        return (
            <React.Fragment>
            <AnimatePresence>
                { this.state.loading &&
                <motion.div
                position="center"
                initial={{ opacity: 0, height: 0}}
                animate={{ opacity: 1, height: "auto", scale:[0, 1, 1.5, 1]}}
                exit={{ opacity: 0, height: "0px" }}
                >
                <Spinner position="center"/>
                </motion.div>
                }
            </AnimatePresence>
            {/*  : null} */}
            <div className={"box comments toggleOn"}>
                <div className="d-flex flex-column" id="comment-container">
                    <AnimatePresence>
                    {this.state.comments.map((comment, index) => (
                        <motion.div 
                        key={index + "-" + this.state.idpost} 
                        className="d-flex comment-item px-3 py-2"
                        initial={{ opacity: 0, height: 0, x: 10}}
                        animate={{ opacity: 1, height: "auto", x: 0}}
                        exit={{ opacity: 0, height: 0 }}
                        >
                            <img className="small-avatar mr-2" src={getAvatarUrl(comment.avatar, comment.username)} alt="" />
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column">
                                    <a className="nostyle w-fit font-weight-bold" href={"./user/" + comment.display_name}><span className="mb-0">{comment.username}</span></a>
                                    <small className="muted-3">{comment.on_date}</small>
                                </div>
                                <span className="mt-1">{comment.content}</span>
                            </div>
                            
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    <motion.div initial={{ height: 0}} animate={{ height: "auto"}} exit={{ height: 0}}>
                        <PostComments id={this.state.idpost} newComment={this.newComment} />
                    </motion.div>
                </AnimatePresence>
                
            </div>
            </React.Fragment>
        );
    }
}
export default Comments;