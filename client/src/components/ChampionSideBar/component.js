import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionSearchBar from 'Lib/ChampionSearchBar';
import MyChampionsList from './MyChampionsList';

export default class ChampionSideBar extends Component {
  render() {
    const {champList, myChampions} = this.props;
    return (
      <div>
        <Panel header="My Champions">
          <MyChampionsList champList={champList} myChampions={myChampions} />
          <ChampionSearchBar />
        </Panel>
      </div>
    );
  }
}