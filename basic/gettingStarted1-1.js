//Use this at https://jscomplete.com/repl

class Button extends React.Component {
	state = {counter:0};

  handleClick = () => {
   this.setState((prevState) => {
   return {
   	   counter:prevState.counter + 1
   }})
  }

	render() {
		return (
			<button onClick={this.handleClick}>
      {this.state.counter}
      </button>
		);
	};
}

ReactDOM.render(<Button label="Do"/>, mountNode)
