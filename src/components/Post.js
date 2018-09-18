import React from 'react';
import PropTypes from 'prop-types';
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import red from "@material-ui/core/colors/red";

import ThumbDown from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";





function Post(props) {


    function handleLike() {
        console.log('like!')
    }

    function handleDislike() {
        console.log('unlike')
    }

    let color = "inheret";
    let poopColor = "inheret"
    // if (this.state.liked) {
    //     color = "secondary";
    // }
    // if (this.state.disliked) {
    //     poopColor = "secondary";
    // }

    const postInformation =
        <div>
            <h3>{props.name} - {props.time}</h3>
            <h4>{props.content}</h4>
            <IconButton aria-label="Add to favorites">
                <Badge badgeContent={1} color="primary">
                    <FavoriteIcon color={color} onClick={handleLike} />
                </Badge>
            </IconButton>
            <IconButton>
                <Badge badgeContent={1} color="primary">
                    <ThumbDown color={poopColor} onClick={handleDislike} />
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
    ticketId: PropTypes.string.isRequired
};

export default Post;

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