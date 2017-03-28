import React, { Component, PropTypes } from 'react';

export default ({imageOnly, champ, addChampion}) => {
  return (
		<span onClick={() => addChampion(champ)}> 
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