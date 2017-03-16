import React, { Component, PropTypes } from 'react';
import axios from 'axios';


export default class ChampionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      version: null
    };
    this.getVersion = this.getVersion.bind(this);
    this.getChampList = this.getChampList.bind(this);
  }

  getVersion() {
    this.props.requestVersion();
  }

  getChampList() {
    this.props.requestChampList();
  }

  componentDidMount() {
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

    
    this.getVersion();
    this.getChampList();
    // .then(data => {
    //   latestVersion = data;
    //   return this.props.requestChampList();
    // })
    // .then(champions => {
    //   // up to this point would be api call

    //   // saga
    //   // const champs = yield call request champions
      

    //   // reducer
    //   
    // })
    // .catch(err => {
    //   console.log("error: ", err)
    // })
  }

  populateChampList() {
    console.log("running populateChampList")

    var champData = [];
    var latestVersion = this.props.version;
    var champions = this.props.champions;
    var alphabetizedChampionsList = {};
    console.log(this.props)
    Object.keys(champions).sort().forEach(champName => {
      alphabetizedChampionsList[champName] = champions[champName];
    })
    for (var champName in alphabetizedChampionsList) {
      var champInfo = alphabetizedChampionsList[champName];
      champInfo.imageURL = "http://ddragon.leagueoflegends.com/cdn/" + latestVersion + "/img/champion/"+champInfo.image.full;
      champData.push(<div key={champName}> 
        {champInfo.name} <img src={champInfo.imageURL}/> 
        </div>);
    }
    return champData;
  }

  render() {
    const isFetching = this.props.isFetching;
    const champsList = this.props.champions;
    return (
      <div>
        {isFetching && 
          <h1>fetching</h1>
        }
        {!isFetching && champsList && 
          <div className="container">
            <h1>Champions List Page</h1>
            {this.populateChampList()}
          </div>
        }
      </div>
    );
  }
}