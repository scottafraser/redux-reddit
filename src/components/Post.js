import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
    const postInformation =
        <div>
            <h3>{props.name} - {props.time}</h3>
            <h4>{props.content}</h4>
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