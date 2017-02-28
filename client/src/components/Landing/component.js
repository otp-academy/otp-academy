import React, { Component } from 'react';
import NavBar from '../NavBar';
import ChampionSideBar from '../ChampionSideBar';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ChampionSideBar />
      </div>  
    );
  }
}