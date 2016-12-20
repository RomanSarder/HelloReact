var ImageCounter = function(props) {
	return(
	<div className="image-counter">
		<div className="count">{props.count}</div>
		<img src={props.imageUrl} onClick={props.onCount}/>
	</div>
	);
}

var Hero = React.createClass({
	getInitialState: function() {
		return {
			count:0
		};
	},
	handleClick: function() {
		this.setState({ count: this.state.count + 1 });
	},
	render: function() {
		return (
			<div className="container">
				<ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick}/>
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.heroes.map(function(hero){
					return <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl}/>;
				})}
			</div>
		); 
	}
});

var data = [
	{
		id: 1,
		title: 'React',
		subtitle: 'A javascript library for building user interface',
		imageUrl: 'images/react.png'
	},
	{
		id: 2,
		title: 'Angular 2',
		subtitle: 'Superhero framework',
		imageUrl: 'images/angular.png'
	},
	{
		id: 3,
		title: 'Ember',
		subtitle: 'Framework for building ambitious web applications',
		imageUrl: 'images/ember.png'
	},
	{
		id: 4,
		title: 'Vue',
		subtitle: 'Progressive framework',
		imageUrl: 'images/vue.png'
	}
];

ReactDOM.render(<App heroes={data}/>,document.getElementById('root'));
