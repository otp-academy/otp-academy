import React, { Component, PropTypes } from 'react';

export default ({imageOnly, champ, addChampion, clearSearchBar, add}) => {
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
	            <button>x</button>
	            <p title={champ.name}>{ champ.name }</p>
	          </span>
					)
			  )
	  	}
    </span>
  );
}