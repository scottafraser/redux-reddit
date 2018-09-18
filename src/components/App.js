import React, { Component } from 'react';
import './App.css';
import NewPostForm from './NewPostForm';
import Feed from './Feed';
import { connect } from "react-redux";
import PropTypes from "prop-types";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFeedList: {}
    };
  }

  render() {
    return (
      <div className="App">
        <NewPostForm />
        <Feed feed={this.props.masterFeedList} />
      </div>
    )}
}

App.propTypes = {
  masterFeedList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterFeedList: state
  };
};

export default connect(mapStateToProps)(App);