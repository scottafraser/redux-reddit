import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 } from 'uuid'  

const NewPostForm = (props) => {
    let _name = null;
    let _content = null;

    function handleNewPost(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action ={
            type: 'ADD_POST',
            id: v4(),
            name: _name.value,
            content: _content.value,
            time: (new Date()).getMonth() + 1 + "/" + (new Date()).getDate() + "/" + (new Date()).getFullYear(),
            likes: 0,
            dislikes: 0
        };
        dispatch(action)
        _name.value = '';
        _content.value = '';
    }

    return (
        <div>
            <form onSubmit={handleNewPost}>
                <input
                    type='text'
                    id='name'
                    placeholder='User Name'
                    ref={(input) => { _name = input; }} />
                <input
                    type='text'
                    id='content'
                    placeholder='Content'
                    ref={(input) => { _content = input; }} />
                <button type='submit'>Post</button>
            </form>
        </div>
    );
}

export default connect()(NewPostForm);
