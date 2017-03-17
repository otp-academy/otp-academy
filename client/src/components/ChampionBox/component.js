import React, { Component, PropTypes } from 'react';

export default class ChampionBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const champ = this.props.champ;
    return (
      <div key={champ.name}> 
        {champ.name} <img src={champ.imageURL}/> 
      </div>
    );
  }
}