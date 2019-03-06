const React = require('react');
const Component = React.Component;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isSayBy: false
    }
  }
  handleClick(){
    this.setState({
      isSayBy: !this.state.isSayBy
    });
  }
  render(){
    return <div>
      <h1>SSR SUCCESS!!!</h1>
      <button onClick={this.handleClick.bind(this)}>switch</button>
    </div>
  }
}