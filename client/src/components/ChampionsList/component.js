import React, { Component, PropTypes } from 'react';
import axios from 'axios';


export default class ChampionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      version: null
    };
  }

  getVersion() {
    this.props.requestVersion();
  }

  getChampList() {
    this.props.requestChampList();
  }

  componentWillMount() {
    var latestVersion = "7.3.3";
    // fetch for latest league version to get champion's image URL

    // action from index.js
    // fetch('/api/version')
    // .then(res => {
    //   return res.text()
    // })
    // .then(data => {
    //   latestVersion = data;
    //   return fetch('/api/champions')
    // })
    // .then(res => {
    //   return res.json();
    // })
    // .then(res => {
    //   var champions = JSON.parse(res).data;

    
    getVersion();
    getChampList();
    // .then(data => {
    //   latestVersion = data;
    //   return this.props.requestChampList();
    // })
    // .then(champions => {
    //   // up to this point would be api call

    //   // saga
    //   // const champs = yield call request champions
      

    //   // reducer
    //   for(var champName in champions) {
    //     var champ = champions[champName];
    //     champ.imageURL = "http://ddragon.leagueoflegends.com/cdn/" + latestVersion + "/img/champion/"+champ.image.full;
    //   }
    //   const alphabetizedChampionsList = {};
    //   Object.keys(champions).sort().forEach(champName => {
    //     alphabetizedChampionsList[champName] = champions[champName];
    //   })
    //   this.setState({ champions: alphabetizedChampionsList });
    // })
    // .catch(err => {
    //   console.log("error: ", err)
    // })
  }

  render() {
    var champData = [];
    if (this.props.isFetching) {
      console.log("fetching")
    }
    else if (this.props.error) {

    }
    else {
      console.log("no longer fetching")
      if (this.state) {
        for (var champName in this.props.champions) {
          var champ = this.props.champions[champName];
          champData.push(<div key={champName}> 
            {champ.name} <img src={champ.imageURL}/> 
            </div>);
        }
      }
    }
    return (
      <div className="container">
        <h1>Champions List Page</h1>
        {champData}
      </div>
    );
  }
}