import React, { Component } from 'react';
import './index.css';

export default class Typeahead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = 'typeahead-library';
    const { show, onClick, data, displayCount } = this.props;

    return (
      <div className={ className + (show ? '' : '-hide') }>
        <div>
          <ul>
            {
              data.slice(0, displayCount).map((champion, index) => {
                return (
                  <li key={index}>
                    <img src={champion.imageURL} />
                    <span>{ champion.name }</span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}