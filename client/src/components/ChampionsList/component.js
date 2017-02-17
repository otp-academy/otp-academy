import React, { Component, PropTypes } from 'react';
import axios from 'axios';

export default class ChampionsList extends Component {

  constructor(props) {
    this.state = {champions: {}}
  }
  
  componentWillMount() {
    console.log("In componentWillMount")
    // need to get api info on /api and it needs to be forbidden from being
    // entered into search bar
    var latestVersion = "7.3.3";
    // fetch for latest league version to get champion's image URL
    axios('/api/version')
    .then(res => {
      latestVersion = res.data;
      return axios('/api/champions')
    })
    .then(res => {
      var champions = JSON.parse(res.data).data;
      console.log(champions)
      for(var champName in champions) {
        var champ = champions[champName];
        champ.imageURL = "http://ddragon.leagueoflegends.com/cdn/" + latestVersion + "/img/champion/"+champ.image.full;
      }
      this.setState({ champions });
    })
  }

  render() {
    console.log("In render")
    console.log(this.state)
    if (!this.state.champions) this.setState({champions: {}})
    var champData = [];
    for (var champName in this.state.champions) {
      champ = this.state.champions[champName]
      champData.push(<div className='champData'> {champ} </div>);
    }
    return (
      <div className="container">
        <h1>Champions List Page</h1>
        {champData}
      </div>
    );
  }
}