import React, { Component, PropTypes } from 'react';

export default class ChampionBox extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.addChampion = this.addChampion.bind(this);
  }

	addChampion(champion) {
    console.log('addchampion')
    this.state.value = '';
    // write champion to store by updating user.champions
    // make a new action and create post request
  }

  render() {
		const {imageOnly, champ} = this.props;
	  return (
			<span onClick={() => this.addChampion(champ)}> 
		  	{
		  		imageOnly ? (
		  			<img src={champ.imageURL}/> 
		  		) : (
		  			<span className="box">
	            <img src={champ.imageURL}/>
	            <p title={champ.name}>{ champ.name }</p>
	          </span>
				  )
		  	}
	    </span>
	  );
  }
}