var React = require('react');
var CommentList = require('./CommentList.js');
var CommentForm = require('./CommentForm.js');

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

module.exports = CommentBox;
