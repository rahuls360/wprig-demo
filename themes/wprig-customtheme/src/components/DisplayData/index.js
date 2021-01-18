const { render, Component } = wp.element;

export default class DisplayData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((response) => response.json())
			.then((json) => this.setState({ data: json.slice(0, 10) }));
	}

	render() {
		return (
			<div>
				<h1>testeddd</h1>
				{this.state.data.map((item) => (
					<div key={item.albumId}>
						<h3>{item.title}</h3>
						<img src={item.thumbnailUrl} />
					</div>
				))}
			</div>
		);
	}
}

render(<DisplayData />, document.getElementById(`products-root`));
