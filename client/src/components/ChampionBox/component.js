import React, { Component, PropTypes } from 'react';

export default ({champ}) => {
  return (
    <div key={champ.name}> 
      {champ.name} <img src={champ.imageURL}/> 
    </div>
  );
}