import React from 'react';
import ChampionBox from '../ChampionBox';

export default (props) => {
  const champList = props.champList;
  const myChampions = props.myChampions;
  return (
    <div>
    	{
	    	Object.keys(myChampions).map(index => {
	    		var championName = myChampions[index];
	        if (championName !== 'version' && champList.hasOwnProperty(championName)) {
	        	var champion = champList[championName];
	    			return <ChampionBox key={championName} champ={champion} add={false} />
	        }
	      })
	    }
    </div>
  );
}