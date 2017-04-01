import React, { Component } from 'react';
import ChampionSideBar from '../ChampionSideBar';
import ChampionNotes from '../ChampionNotes';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.createNotesPanel = this.createNotesPanel.bind(this);
  }
  componentDidMount() {
    if (Object.keys(this.props.champList).length === 0) this.props.requestChampList();
  }
  
  createNotesPanel(champ) {
    this.setState({
      showComponent: true,
      currentChamp: champ
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-4">
          <ChampionSideBar createNotesPanel={ this.createNotesPanel }/>
          {this.state.showComponent && 
            <ChampionNotes champ={ this.state.currentChamp }/>
          }
        </div>
      </div>  
    );
  }
}