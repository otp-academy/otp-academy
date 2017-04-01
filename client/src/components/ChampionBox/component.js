import React, { Component, PropTypes } from 'react';

export default (props) => {
	const {imageOnly, champ, addChampion, clearSearchBar, deleteChampion, createNotesPanel, showMatchupNotes, add} = props;
	return (
		<span onClick={() => {
			if (add) {
				if (addChampion) addChampion(champ);
				else if (showMatchupNotes) showMatchupNotes(champ);
				clearSearchBar();
			}
			else if (createNotesPanel) createNotesPanel(champ);
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
	            <button onClick={(e) => {
	            	e.stopPropagation();
	            	deleteChampion(champ);
	            }}>x</button>
	            <p title={champ.name}>{ champ.name }</p>
	          </span>
					)
			  )
	  	}
    </span>
  );
}