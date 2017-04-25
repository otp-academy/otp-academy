import React, { Component } from 'react';
import { Col } from 'react-bootstrap/lib';
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
        <Col sm={4}>
          <ChampionSideBar createNotesPanel={ this.createNotesPanel }/>
        </Col>
        <Col sm={8}>
          {this.state.showComponent && 
            <ChampionNotes champ={ this.state.currentChamp }/>
          }
        </Col>
      </div>  
    );
  }
}