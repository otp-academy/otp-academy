import React from 'react';
import ChampionBox from '../ChampionBox';

export default (props) => {
  const champions = props.champList
  return (
    <div>
    	{
	    	Object.keys(champions).map(championName => {
	        if (championName !== 'version') {
	          var champion = champions[championName];
	    			return <ChampionBox key={championName} champ={champion}/>
	        }
	      })
	    }
    </div>
  );
}