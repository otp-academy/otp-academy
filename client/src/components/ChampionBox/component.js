import React, { Component, PropTypes } from 'react';

export default (props) => {
	const {imageOnly, champ, addChampion, clearSearchBar, add, deleteChampion} = props;
  return (
		<span onClick={() => {
			if (add) {
				addChampion(champ);
				clearSearchBar();
			} else {

			}
		}}> 
	  	{
	  		imageOnly ? (
	  			<img src={champ.imageURL}/> 
	  		) : (
	  			add ? (
		  			<span className="box">
	            <img src={champ.imageURL}/>
	            <p title={champ.name}>{ champ.name }</p>
	          </span>
	        ) : (
	        	<span className="box">
	            <img src={champ.imageURL}/>
	            <button onClick={() => deleteChampion(champ)}>x</button>
	            <p title={champ.name}>{ champ.name }</p>
	          </span>
					)
			  )
	  	}
    </span>
  );
}