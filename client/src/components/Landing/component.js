import React, { Component } from 'react';
import ChampionSideBar from '../ChampionSideBar';
import ChampionNotes from '../ChampionNotes';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.createChampNotes = this.createChampNotes.bind(this);
  }
  componentDidMount() {
    if (Object.keys(this.props.champList).length === 0) this.props.requestChampList();
  }
  
  createChampNotes(champ) {
    console.log(champ)
    this.setState({
      showComponent: true
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-4">
          <ChampionSideBar createChampNotes={ this.createChampNotes }/>
          {this.state.showComponent ? 
            <ChampionNotes champ={ this.props.myChampions[0] } /> :
            null
          }
        </div>
      </div>  
    );
  }
}