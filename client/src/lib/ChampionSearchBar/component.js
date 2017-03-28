import React, { Component } from 'react';
import Typeahead from 'Lib/Typeahead';

export default class ChampionSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterChamps = this.filterChamps.bind(this);
    this.addChampion = this.addChampion.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  filterChamps(currentValue, myChampions, allChampions) {
    const filtered = [];
    Object.keys(allChampions).forEach(champName => {

      const champion = allChampions[champName];

      if (!myChampions[champion.name] && champion.name.toLowerCase().indexOf(currentValue) > -1) {
        filtered.push(champion);
      }
    });
    return filtered;
  }

  addChampion(champion) {
    this.setState({
      value: ''
    });
    console.log(champion)
    // add champion to mychampions
  }

  render() {
    const { champList, myChampions, clickAction } = this.props;
    return (
      <div>
        <input type="text" value={ this.state.value } onChange={this.handleChange} placeholder="Add a Champion"/>
        <Typeahead
          show={ this.state.value }
          displayCount={ 4 }
          data={ this.filterChamps(this.state.value, myChampions, champList) }
          addChampion={ this.addChampion }
        />
      </div>
    );
  }
}