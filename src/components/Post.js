import React from 'react';
import PropTypes from 'prop-types';
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import red from "@material-ui/core/colors/red";
import ThumbDown from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";

function Post(props) {


    function handleLike() {
        console.log(props.likes  + "we got handle like");
        const { dispatch } = props;
        const action = {
            type: 'LIKE_POST',
            postId: props.postId
        }
        dispatch(action)
        console.log(action)
    }

    function handleDislike() {
        console.log('unlike')
    }

    const postInformation =
        <div>
            <h3>{props.name} - {props.time}</h3>
            <h4>{props.content}</h4>
            <IconButton aria-label="Add to favorites">
                <Badge badgeContent={props.likes} color="primary">
                    <FavoriteIcon onClick={handleLike} />
                </Badge>
            </IconButton>
            <IconButton>
                <Badge badgeContent={props.dislikes} color="primary">
                    <ThumbDown onClick={handleDislike} />
                </Badge>
            </IconButton>
            <hr />
        </div>;

    return (
        <div>
            {postInformation}
        </div>
    );
}

Post.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string,
    postId: PropTypes.string.isRequired,
    likes: PropTypes.number,
    dislikes: PropTypes.number
};

export default connect()(Post);

    // <IconButton aria-label="Add to favorites">
    //     <Badge badgeContent={this.state.likeCount} color="primary" classes={{ badge: classes.badge }}>
    //         <FavoriteIcon color={color} onClick={this.handleLike} />
    //     </Badge>
    // </IconButton>
    // <IconButton>
    //     <Badge badgeContent={this.state.dislikeCount} color="primary" classes={{ badge: classes.badge }}>
    //         <ThumbDown color={poopColor} onClick={this.handleDislike} />
    //     </Badge>
    // </IconButton>