import React, { Component } from 'react';
import ChampionSideBar from '../ChampionSideBar';

export default class Landing extends Component {
  componentDidMount() {
    if (Object.keys(this.props.champList).length === 0) this.props.requestChampList();
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-4">
          <ChampionSideBar />
        </div>
      </div>  
    );
  }
}