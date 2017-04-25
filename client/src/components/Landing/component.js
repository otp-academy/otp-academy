import React, { Component } from 'react';
import { Col } from 'react-bootstrap/lib';
import ChampionSideBar from '../ChampionSideBar';
import ChampionNotes from '../ChampionNotes';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numNotes: 0,
      currentChamps: []
    };
    this.createNotesPanel = this.createNotesPanel.bind(this);
    this.deleteNotesPanel = this.deleteNotesPanel.bind(this);
  }
  componentDidMount() {
    if (Object.keys(this.props.champList).length === 0) this.props.requestChampList();
  }
  
  createNotesPanel(champ) {
    // array of champs that you currently want notes panels for
    let { currentChamps, numNotes } = this.state;
    currentChamps.push(champ);
    numNotes++;
    this.setState({numNotes, currentChamps});
  }

  deleteNotesPanel(i) {
    let { currentChamps, numNotes } = this.state;
    numNotes--;
    currentChamps.splice(i, 1);
    this.setState({numNotes, currentChamps});
  }

  render() {
    const notesPanels = [];
    const { currentChamps, numNotes } = this.state;
    for (var i = 0; i < numNotes; i++) {
      notesPanels.push(<ChampionNotes 
                          number={ i } 
                          champ={ currentChamps[i] }
                          deleteNotesPanel = { this.deleteNotesPanel }
                        />)
    }
    return (
      <div className="container-fluid" id="landing">
        <Col sm={4}>
          <ChampionSideBar createNotesPanel={ this.createNotesPanel }/>
        </Col>
        <Col sm={8}>
          {notesPanels}
        </Col>
      </div>  
    );
  }
}