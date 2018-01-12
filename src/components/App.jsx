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
  backendStatus?: boolean
}

class App extends React.Component<Props, State> {
  // Change this code and push into redux state
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    // Not a huge fan of try/catches with async await, but we'll see
    try {
      await this.props.fetchStatus();
      this.setState({ backendStatus: true });
    } catch (error) {
      this.setState({ backendStatus: false })
    }
  }

  render() {
    return (
      <div className="App">
        <StatusFavicon status={this.state.backendStatus} />
        <NavigationBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
