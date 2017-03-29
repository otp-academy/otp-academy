import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionSearchBar from 'Lib/ChampionSearchBar';
import MyChampionsList from './MyChampionsList';

export default class ChampionSideBar extends Component {
  constructor(props) {
    super(props);
    this.addChampion = this.addChampion.bind(this);
    this.deleteChampion = this.deleteChampion.bind(this);
  }

  addChampion(champion) {
    const {myChampions} = this.props;
    // search if champ already exists in user's list
    var i = 0, len = Object.keys(myChampions).length;
    for (; i < len; i++) {
      if (myChampions[i] === champion.key) break;
    }
    if (i === len) myChampions[i] = champion.key;
    this.setState({
      myChampions
    });
    // add champion to user.champions in store and user's champion array in database
    // make sure to only do so if user is logged in
    if (this.props.userId) this.props.requestAddChamp(this.props.userId, champion.key);
  }

  deleteChampion(champion) {
    
  }

  render() {
    const {champList, myChampions} = this.props;
    return (
      <div>
        <Panel header="My Champions">
          <MyChampionsList champList={champList} myChampions={myChampions} deleteChampion={this.deleteChampion} />
          <ChampionSearchBar addChampion={this.addChampion} />
        </Panel>
      </div>
    );
  }
}