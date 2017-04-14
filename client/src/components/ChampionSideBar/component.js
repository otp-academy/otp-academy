import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionSearchBar from 'lib/ChampionSearchBar';
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
    for (var i = 0; i < Object.keys(myChampions).length; i++) {
      if (myChampions[i] === champion.key) return;
    }
    // myChampions[Object.keys(myChampions).length] = champion.key;
    // add champion to user.champions in store and user's champion array in database
    // make sure to only do so if user is logged in
    if (this.props.userId) this.props.requestAddChamp(this.props.userId, champion.key);
  }

  deleteChampion(champion) {
    const {myChampions} = this.props;
    // var arrMyChampions = Array.from(myChampions);
    // var indexToDelete = arrMyChampions.findIndex(el => el === champion.key);
    // arrMyChampions.splice(indexToDelete, 1);
    // delete champion from user.champions in store and user's champion array in database if user is logged in
    if (this.props.userId) this.props.requestDeleteChamp(this.props.userId, champion.key);
  }

  render() {
    const {champList, myChampions, createNotesPanel} = this.props;
    return (
      <div>
        <Panel header="My Champions">
          <MyChampionsList
            champList={champList}
            myChampions={myChampions}
            deleteChampion={this.deleteChampion}
            createNotesPanel={createNotesPanel}
          />
          <ChampionSearchBar addChampion={this.addChampion} />
        </Panel>
      </div>
    );
  }
}