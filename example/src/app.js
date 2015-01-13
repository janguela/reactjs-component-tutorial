var React = require('react');
var CommentBox = require('comment-box');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <CommentBox url="comments.json" />
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));
