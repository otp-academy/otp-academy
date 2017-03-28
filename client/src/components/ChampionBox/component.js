import React, { Component, PropTypes } from 'react';

export default ({imageOnly, champ, addChampion, clearSearchBar}) => {
  return (
		<span onClick={() => {
			addChampion(champ);
			clearSearchBar();
		}}> 
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