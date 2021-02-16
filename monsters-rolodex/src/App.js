import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";

import "./App.css";

class App extends Component {
  constructor() {
    //runs first before anything else
    super();
    this.state = {
      monsters: [], //initiallize as empty
      searchField: "",
    };
    //have to do this because this is out of the scope of the handChange below
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        // console.log(response)
        response.json()
      )
      // .then((users) => console.log(users));
      .then((users) => this.setState({ monsters: users }));
  }
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  //lexical scoping
  handleChange = (e) => {
    //automatically binds this to the function
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(this.state.monsters); //now is array of monsters
    return (
      <div className="App">
        <h1>Monsters Rolledex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        {/* <CardList monsters={this.state.monsters}></CardList> */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
