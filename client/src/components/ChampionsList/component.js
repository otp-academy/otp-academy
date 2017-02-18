import React, { Component, PropTypes } from 'react';
import axios from 'axios';

export default class ChampionsList extends Component {

  

  componentWillMount() {
    // need to get api info on /api and it needs to be forbidden from being
    // entered into search bar
    var latestVersion = "7.3.3";
    // fetch for latest league version to get champion's image URL
    fetch('/api/version')
    .then(res => {
      return res.text()
    })
    .then(data => {
      latestVersion = data;
      return fetch('/api/champions')
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      var champions = JSON.parse(res).data;
      for(var champName in champions) {
        var champ = champions[champName];
        champ.imageURL = "http://ddragon.leagueoflegends.com/cdn/" + latestVersion + "/img/champion/"+champ.image.full;
      }
      this.setState({ champions });
    })
    .catch(err => {
      console.log("error: ", err)
    })
  }

  render() {
    console.log("In render")
    console.log(this.state)
    var champData = [];
    // for (var champName in this.state.champions) {
    //   champ = this.state.champions[champName]
    //   champData.push(<div className='champData'> {champ} </div>);
    // }
    return (
      <div className="container">
        <h1>Champions List Page</h1>
        {champData}
      </div>
    );
  }
}