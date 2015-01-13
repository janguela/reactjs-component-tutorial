var React = require('react');

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h3 className="commentAuthor">
					{this.props.author}
				</h3>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Comment;
