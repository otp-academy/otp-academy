import React, { Component, PropTypes } from 'react';
import axios from 'axios';

export default class ChampionsList extends Component {

  componentDidMount() {
    // need to get api info on /api and it needs to be forbidden from being
    // entered into search bar
    axios.get('/api/champions')
    .then(res => {
      const champions = res.data.data.children.map(obj => obj.data);
      this.setState({ champions });
      console.log(champions);
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