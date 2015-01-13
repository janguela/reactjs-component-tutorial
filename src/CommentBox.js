var React = require('react');
var CommentList = require('./CommentList.js');
var CommentForm = require('./CommentForm.js');

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h2>Comments</h2>
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
});

module.exports = CommentBox;
