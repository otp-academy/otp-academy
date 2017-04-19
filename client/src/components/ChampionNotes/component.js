import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionBox from '../ChampionBox';
import ChampionSearchBar from '../../lib/ChampionSearchBar'

export default class ChampionNotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentNote: null,
			currentChamp: this.props.champ,
			enemyChamp: null
		};
		this.showMatchupNotes = this.showMatchupNotes.bind(this);
	}

	showMatchupNotes(enemyChamp) {
		const {champ, notes} = this.props;
		var currentNote = (notes && notes[champ.key] && notes[champ.key][enemyChamp.key]) ? 
											notes[champ.key][enemyChamp.key] : "No notes for this matchup"
		this.setState({
			enemyChamp: enemyChamp,
			currentNote: currentNote
		});
	}

	componentDidUpdate() {
		if (this.props.champ !== this.state.currentChamp) {
			this.setState({
				currentChamp: this.props.champ,
				currentNote: null,
				enemyChamp: null
			});
		}
	}

	render() {
  	const {champList, champ} = this.props;
  	const {enemyChamp, currentNote} = this.state;
	  return (
	    <div>
	      <Panel header={
	      	<div>
	        	<ChampionBox champ={ champ } imageOnly={ true } />
	        	vs
	        	{
	        		enemyChamp &&
	        		<ChampionBox champ={ enemyChamp } imageOnly={ true } />
	        	}
	        	<ChampionSearchBar showMatchupNotes={ this.showMatchupNotes } />
	        </div>
		    }>
	      	{ currentNote }
	      	
	      </Panel>
	    </div>
	  );
	}
}