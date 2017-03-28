import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionSearchBar from 'Lib/ChampionSearchBar';
import MyChampionsList from './MyChampionsList';

export default class ChampionSideBar extends Component {
  constructor(props) {
    super(props);
    this.addChampion = this.addChampion.bind(this);
  }

  addChampion(champion) {
    var myChampions = this.props.myChampions;
    // search if champ already exists in user's list
    var i = 0, len = Object.keys(myChampions).length;
    for (; i < len; i++) {
      if (myChampions[i] === champion.name) break;
    }
    if (i === len) myChampions[i] = champion.name;
    this.setState({
      myChampions
    });
    console.log(myChampions)
    console.log(champion)
    // add champion to user.champions in store
  }

  render() {
    const {champList, myChampions} = this.props;
    return (
      <div>
        <Panel header="My Champions">
          <MyChampionsList champList={champList} myChampions={myChampions} />
          <ChampionSearchBar addChampion={this.addChampion} />
        </Panel>
      </div>
    );
  }
}