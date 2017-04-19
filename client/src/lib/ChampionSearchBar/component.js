import React, { Component } from 'react';
import Typeahead from 'lib/Typeahead';

export default class ChampionSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterChamps = this.filterChamps.bind(this);
    this.clearSearchBar = this.clearSearchBar.bind(this);
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

  clearSearchBar() {
    this.setState({
      value: '',
    });
  }

  render() {
    const { champList, myChampions, addChampion, createNotesPanel, showMatchupNotes } = this.props;
    var placeholder = addChampion ? "Add a Champion" : "Select Opponent";
    return (
      <div>
        <input type="text" value={ this.state.value } onChange={this.handleChange} placeholder={placeholder}/>
        <Typeahead
          show={ this.state.value }
          displayCount={ 4 }
          data={ this.filterChamps(this.state.value, myChampions, champList) }
          addChampion={ addChampion }
          createNotesPanel={ createNotesPanel }
          showMatchupNotes={ showMatchupNotes }
          clearSearchBar={ this.clearSearchBar }
        />
      </div>
    );
  }
}