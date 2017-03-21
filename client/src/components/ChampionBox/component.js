import React, { Component, PropTypes } from 'react';

export default ({imageOnly, champ}) => {
  return (
		<span key={champ.name}> 
	  	{
	  		imageOnly ? (
	  			<img src={champ.imageURL} style={{"margin":"2px", "border-radius":"5px", "width":"75px"}}/> 
	  		) : (
	  			<div>
		      	{champ.name} <img src={champ.imageURL}/> 
		      </div>
			  )
	  	}
    </span>
  );
}