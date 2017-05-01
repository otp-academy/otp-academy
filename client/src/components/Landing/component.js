import React, { Component } from 'react';
import { Col } from 'react-bootstrap/lib';
import ChampionSideBar from '../ChampionSideBar';
import ChampionNotes from '../ChampionNotes';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numNotes: 0,
      currentChamps: [],
      enemyChamps: [],
      notes: []
    };
    this.createNotesPanel = this.createNotesPanel.bind(this);
    this.deleteNotesPanel = this.deleteNotesPanel.bind(this);
    this.addEnemyChamp = this.addEnemyChamp.bind(this);
    this.updateNotesArray = this.updateNotesArray.bind(this);
  }

  componentDidMount() {
    this.props.requestSession();
    if (Object.keys(this.props.champList).length === 0) this.props.requestChampList();
  }
  
  addEnemyChamp(enemyChamp, i) {
    let { enemyChamps } = this.state;
    enemyChamps[i] = enemyChamp;
    this.setState({enemyChamps});
  }

  createNotesPanel(champ) {
    // array of champs that you currently want notes panels for
    let { currentChamps, numNotes, notes, enemyChamps } = this.state;
    currentChamps.push(champ);
    enemyChamps.push(null);
    notes.push(null);
    numNotes++;
    this.setState({numNotes, currentChamps, enemyChamps, notes});
  }

  deleteNotesPanel(i) {
    let { currentChamps, enemyChamps, notes, numNotes } = this.state;
    numNotes--;
    currentChamps.splice(i, 1);
    enemyChamps.splice(i, 1);
    notes.splice(i, 1);
    // upon deleting a note panel, update all other siblings' panels to correctly display the notes
    this.setState({numNotes, currentChamps, enemyChamps, notes});
  }

  updateNotesArray(i, currentNote) {
    let { notes } = this.state;
    notes[i] = currentNote;
    this.setState({notes});
    console.log(notes)
  }

  render() {
    const notesPanels = [];
    const { currentChamps, enemyChamps, notes, numNotes } = this.state;
    for (var i = 0; i < numNotes; i++) {
      notesPanels.push(<ChampionNotes 
                          key={ currentChamps[i].key + i }
                          number={ i } 
                          champ={ currentChamps[i] }
                          enemyChamp={ enemyChamps[i] }
                          notesFromArray={ notes[i] }
                          deleteNotesPanel = { this.deleteNotesPanel }
                          addEnemyChamp = { this.addEnemyChamp }
                          updateNotesArray = { this.updateNotesArray }
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