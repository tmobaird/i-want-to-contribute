// @flow
import * as React from 'react';
import NavigationBar from './NavigationBar';
import '../styles/App.css';
import '../styles/bootstrap-overrides.css';
import StatusFavicon from "./StatusFavicon";

interface Props {
  fetchStatus: () => boolean,
  children?: React.Node
}

interface State {
  backendStatus: number
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { backendStatus: 0 };
  }
  async componentDidMount() {
    // Not a huge fan of try/catches with async await, but we'll see
    try {
      await this.props.fetchStatus();
      this.setState({ backendStatus: 1 });
    } catch (error) {
      this.setState({ backendStatus: -1 })
    }
  }

  render() {
    return (
      <div className="App">
        <StatusFavicon status={this.state.backendStatus} />
        <NavigationBar status={this.state.backendStatus} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
