import React, { Component } from "react";
import "tachyons";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], term: "" };
  }
  onSearchChange = (term) => {
    this.setState({ term });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  render() {
    const filteredRobots = this.state.robots.filter((f) =>
      f.name.toLowerCase().includes(this.state.term.toLowerCase())
    );

    return (
      <div className="tc">
        <h1 className="f1">Hello RObOtS!</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default App;
