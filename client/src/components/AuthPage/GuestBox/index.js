import React from 'react';
import { Panel, Button } from 'react-bootstrap';

export default () => {
  return (
    <div className="GuestPanel">
      <Panel header="Guests">
        <Button>Continue as Guest</Button>
      </Panel>
    </div>
  );
}