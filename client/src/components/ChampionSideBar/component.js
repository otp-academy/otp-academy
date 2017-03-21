import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionSearchBar from 'Lib/ChampionSearchBar';
import MyChampionsList from './MyChampionsList';

export default class ChampionSideBar extends Component {
  render() {
    const {champList} = this.props;
    return (
      <div>
        <Panel header="My Champions">
          <ChampionSearchBar />
          <MyChampionsList champList={champList}/>
        </Panel>
      </div>
    );
  }
}