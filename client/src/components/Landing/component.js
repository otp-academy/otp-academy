import React, { Component } from 'react';
import ChampionSideBar from '../ChampionSideBar';

export default class Landing extends Component {
  componentDidMount() {
    this.props.requestChampList();
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