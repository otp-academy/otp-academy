import React, { Component, PropTypes } from 'react';

export default class ChampionsList extends Component {

  componentDidMount() {
    // need to get api info on /api and it needs to be forbidden from being
    // entered into search bar
    var latestVersion = "7.3.3";
    // fetch for latest league version to get champion's image URL
    fetch('/api/version', {
      method: 'get'
    })
    .then(res => {
      latestVersion = res;
      console.log(latestVersion)
      return fetch('/api/champions')
    })
    .then(res => {
      console.log(res)
      var champions = JSON.parse(res.data).data;
      console.log(champions)
      for(champ in champData) {
        champ.imageURL = "http://ddragon.leagueoflegends.com/cdn/" + latestVersion + "/img/champion/"+champ.image.full;
      }
      this.setState({ champions });
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Champions List Page</h1>
      </div>
    );
  }
}