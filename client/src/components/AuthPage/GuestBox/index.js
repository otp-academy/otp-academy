import React from 'react';
import { Panel, Button } from 'react-bootstrap/lib';

export default () => {
  return (
    <div className="guestPanel">
      <Panel header="Guests" bsStyle="warning">
        <Button bsStyle="warning">Continue as Guest</Button>
      </Panel>
    </div>
  );
}