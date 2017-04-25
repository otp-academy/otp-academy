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
      enemyChamps: []
    };
    this.createNotesPanel = this.createNotesPanel.bind(this);
    this.deleteNotesPanel = this.deleteNotesPanel.bind(this);
    this.addEnemyChamp = this.addEnemyChamp.bind(this);
  }
  componentDidMount() {
    if (Object.keys(this.props.champList).length === 0) this.props.requestChampList();
  }
  
  createNotesPanel(champ) {
    // array of champs that you currently want notes panels for
    let { currentChamps, numNotes, enemyChamps } = this.state;
    currentChamps.push(champ);
    enemyChamps.push(null);
    numNotes++;
    this.setState({numNotes, currentChamps});
  }

  addEnemyChamp(enemyChamp, i) {
    let { enemyChamps } = this.state;
    enemyChamps[i] = enemyChamp;
    this.setState({enemyChamps});
  }

  deleteNotesPanel(i) {
    let { currentChamps, enemyChamps, numNotes } = this.state;
    numNotes--;
    currentChamps.splice(i, 1);
    enemyChamps.splice(i, 1);
    this.setState({numNotes, currentChamps, enemyChamps});
  }

  render() {
    const notesPanels = [];
    const { currentChamps, enemyChamps, numNotes } = this.state;
    for (var i = 0; i < numNotes; i++) {
      notesPanels.push(<ChampionNotes 
                          key={ currentChamps[i].key + i }
                          number={ i } 
                          champ={ currentChamps[i] }
                          enemyChamp={ enemyChamps[i] }
                          deleteNotesPanel = { this.deleteNotesPanel }
                          addEnemyChamp = { this.addEnemyChamp }
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