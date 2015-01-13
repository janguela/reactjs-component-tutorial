var React = require('react'),
	CommentBox = require('comment-box');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<CommentBox />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
