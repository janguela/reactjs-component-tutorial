var React = require('react');
var CommentBox = require('comment-box');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <CommentBox url="comments.json" pollInterval={2000} />
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));
