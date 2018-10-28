import React, { Component } from 'react';
import DropDownCountries from './DropDownCountries';
import Name from './Name';
import Flag from './Flag';

class App extends Component {
  componentWillMount() {
    this.getCountries();
  }

  state = {
    data: [],
    selected: {}
  };

  getCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;flag").then((res) => {
      return res.json();
    }).then((myJson) => {
      this.setState({
        data: myJson,
        selected: {}
      });
    })
  }

  setSelected = (name) => {
    let newState = JSON.parse(JSON.stringify(this.state));
    let country = this.state.data.find((c) => { return c.name === name });
    newState.selected = country;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <DropDownCountries countries={this.state.data} choiceHandler={this.setSelected} />
        <Name name={this.state.selected.name} />
        <Flag flag={this.state.selected.flag} />
      </div>
    );
  }
}

export default App;
