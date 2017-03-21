import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionSearchBar from 'Lib/ChampionSearchBar';
import MyChampionsList from './MyChampionsList';

export default class ChampionSideBar extends Component {
  render() {
    return (
      <div>
        <Panel header="My Champions">
          <ChampionSearchBar />
          <MyChampionsList />
        </Panel>
      </div>
    );
  }
}