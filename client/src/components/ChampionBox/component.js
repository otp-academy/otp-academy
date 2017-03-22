import React, { Component, PropTypes } from 'react';

export default ({imageOnly, champ}) => {
  return (
		<span key={champ.name}> 
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