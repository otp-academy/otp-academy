import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ChampionBox from '../ChampionBox';

export default (props) => {
  const {champList, champ} = props;
  return (
    <div>
      <Panel header="Notes">
        <ChampionBox champ={ champ } />
      </Panel>
    </div>
  );
}