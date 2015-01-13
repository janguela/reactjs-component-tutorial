var React = require('react');
var CommentBox = require('comment-box');

var json_data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var App = React.createClass({
	render: function() {
		return (
			<div>
				<CommentBox data={json_data} />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
