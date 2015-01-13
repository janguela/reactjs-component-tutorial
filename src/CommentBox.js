var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

module.exports = CommentBox;
