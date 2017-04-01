import React, { Component } from 'react';
import './index.css';
import ChampionBox from '../../components/ChampionBox'

export default class Typeahead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = 'typeahead-library';
    const { 
            show,
            onClick,
            data,
            displayCount,
            addChampion,
            clearSearchBar,
            createNotesPanel,
            showMatchupNotes 
          } = this.props;

    return (
      <div className={ className + (show ? '' : '-hide') }>
        <div>
          <ul>
            {
              data.slice(0, displayCount).map((champion, index) => {
                return (
                  <ChampionBox 
                    key={ index }
                    champ={ champion }
                    clearSearchBar={ clearSearchBar }
                    addChampion={ addChampion }
                    createNotesPanel= { createNotesPanel }
                    showMatchupNotes= { showMatchupNotes }
                    add={ true }
                  />
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}