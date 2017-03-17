import React, { Component, PropTypes } from 'react';
import ChampionBox from '../ChampionBox';

export default class ChampionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // fetch for latest league version to get champion's image URL
    this.props.requestVersion();
    this.props.requestChampList();
  }

  render() {
    const {isFetching, champions} = this.props; 
    return (
      <div>
        <div className="container">
          <h1>Champions List Page</h1>
          <div>
            {
              isFetching && <h1>fetching</h1>
            }
            {
              !isFetching && (

                Object.keys(champions).map(championName => {
                  if (championName !== 'version') {
                    var champion = champions[championName];
                    return <ChampionBox champ={champion}/>;
                  }
                })
                )
            }
          </div>
        </div>
      </div>
    );
  }
}