import React, { Component } from 'react';
import { Panel, Button, Col, Image } from 'react-bootstrap/lib';
import ChampionBox from '../ChampionBox';
import ChampionSearchBar from '../../lib/ChampionSearchBar';
import Textarea from 'react-textarea-autosize';

export default class ChampionNotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentNote: null,
			currentChamp: this.props.champ,
			enemyChamp: this.props.enemyChamp,
			editing: false
		};
		this.showMatchupNotes = this.showMatchupNotes.bind(this);
		this.makeEditable = this.makeEditable.bind(this);
		this.saveChanges = this.saveChanges.bind(this);
	}

	showMatchupNotes(enemyChamp) {
		const {champ, notes, addEnemyChamp, number, updateNotesArray} = this.props;
		addEnemyChamp(enemyChamp, number);
		var currentNote = (notes && notes[champ.key] && notes[champ.key][enemyChamp.key]) ? 
											notes[champ.key][enemyChamp.key] : "";
		this.setState({
			enemyChamp: enemyChamp,
			currentNote: currentNote
		});

		updateNotesArray(number, currentNote);
	}

	componentDidUpdate() {
		// if the props and state variables don't matchup, update the state variable
		if (this.props.champ !== this.state.currentChamp) {
			this.setState({
				currentChamp: this.props.champ,
				currentNote: null,
				enemyChamp: null,
				editing: false
			});
		}
		// remember the enemy champ matchup for when there was a deletion of a sibling note above this current note
		if (this.props.enemyChamp && !this.state.enemyChamp) {
			this.setState({
				enemyChamp: this.props.enemyChamp
			});
		}
		// remember the note to be correctly displayed (instead of null) when there was a deletion of a sibling note
		// above this current note
		if (!this.state.currentNote && 
				this.props.notes && this.props.notes[this.props.champ.key] && 
				this.props.notes[this.props.champ.key][this.props.enemyChamp.key]) {
			this.setState({
				currentNote: this.props.notes[this.props.champ.key][this.props.enemyChamp.key]
			});
		}
	}

	makeEditable() {
		let { currentNote, notesFromArray }	= this.state;
		this.setState({
			currentNote: currentNote ? currentNote : notesFromArray,
			editing: true
		})
	}

	saveChanges() {
		var newNote = this.refs.newNote.value;
		const {currentChamp, enemyChamp} = this.state;
		var {notes} = this.props;
		this.setState({
			editing: false,
			currentNote: newNote
		})
		if (currentChamp && enemyChamp) {
			if (!notes[currentChamp.key]) notes[currentChamp.key] = {};
			if (notes[currentChamp.key][enemyChamp.key] === newNote || 
					newNote === "") return;
			notes[currentChamp.key][enemyChamp.key] = newNote;
			this.props.requestUpdateNotes(this.props.userId, notes);
		}
	}

	render() {
  	const {champList, champ, deleteNotesPanel, number, notesFromArray} = this.props;
  	const {enemyChamp, currentNote, editing} = this.state;

	  return (
	    <div>
	      <Panel header={
	      	<div>
        		<ChampionBox champ={ champ } imageOnly={ true } />
        		<img id="versus" src={require('../../lib/StaticImg/versus.png')} alt="VS" />
	        	{
	        		enemyChamp &&
	        		<ChampionBox champ={ enemyChamp } imageOnly={ true } />
	        	}
	        	<span id="enemySearch">
	        		<ChampionSearchBar style={{marginLeft: '10px'}} showMatchupNotes={ this.showMatchupNotes } />
	        	</span>
	        	<button onClick={(e) => {
            	e.stopPropagation();
            	deleteNotesPanel(number);
            }}>x</button>
	        </div>
		    }>
      		{!editing && enemyChamp && 
      			<div className="content">
      				<text>{currentNote ? currentNote : (notesFromArray ? notesFromArray : "No notes for this matchup")}</text>
      				<Button bsStyle="info" onClick={this.makeEditable}>Edit</Button>
      			</div>
      		}
      		{editing && enemyChamp &&
      			<div className="content">
		      		<Textarea 
		      			ref="newNote"
		      			defaultValue={currentNote}
		      		></Textarea>
	      			<Button type="submit" bsStyle="info" onClick={this.saveChanges}>Save</Button>
      			</div>
      		}
	      </Panel>
	    </div>
	  );
	}
}
