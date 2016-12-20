"use strict";

var ImageCounter = function ImageCounter(props) {
	return React.createElement(
		"div",
		{ className: "image-counter" },
		React.createElement(
			"div",
			{ className: "count" },
			props.count
		),
		React.createElement("img", { src: props.imageUrl, onClick: props.onCount })
	);
};

var Hero = React.createClass({
	getInitialState: function getInitialState() {
		return {
			count: 0
		};
	},
	handleClick: function handleClick() {
		this.setState({ count: this.state.count + 1 });
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(ImageCounter, { imageUrl: this.props.imageUrl, count: this.state.count, onCount: this.handleClick }),
			React.createElement(
				"h1",
				null,
				this.props.title
			),
			React.createElement(
				"p",
				null,
				this.props.subtitle
			)
		);
	}
});

var App = React.createClass({
	render: function render() {
		return React.createElement(
			"div",
			null,
			this.props.heroes.map(function (hero) {
				return React.createElement(Hero, { key: hero.id, title: hero.title, subtitle: hero.subtitle, imageUrl: hero.imageUrl });
			})
		);
	}
});

var data = [{
	id: 1,
	title: 'React',
	subtitle: 'A javascript library for building user interface',
	imageUrl: 'images/react.png'
}, {
	id: 2,
	title: 'Angular 2',
	subtitle: 'Superhero framework',
	imageUrl: 'images/angular.png'
}, {
	id: 3,
	title: 'Ember',
	subtitle: 'Framework for building ambitious web applications',
	imageUrl: 'images/ember.png'
}, {
	id: 4,
	title: 'Vue',
	subtitle: 'Progressive framework',
	imageUrl: 'images/vue.png'
}];

ReactDOM.render(React.createElement(App, { heroes: data }), document.getElementById('root'));