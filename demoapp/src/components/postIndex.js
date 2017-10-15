import React,{ Component } from 'react'
import {connect} from 'react-redux';
import { fetchPost } from "../actions/index";
import { Link } from 'react-router-dom'
import _ from 'lodash';

class PostIndex extends Component {
    componentDidMount(){
        this.props.fetchPost();
    }
    renderPosts(){
       return _.map(this.props.posts,post => {
            return (
                <li className={'list-group-item'} key={post.id}>
                    {post.title}
                </li>
            );
        })
    }
    render() {
        console.log(this.props.posts);
        return(
            <div>
                <div className={'text-xs-right'}>
                    <Link className={'btn btn-primary'} to={'/post/new'}>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className={'list-group'}></ul>
                {
                    this.renderPosts()
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps,{ fetchPost })(PostIndex);