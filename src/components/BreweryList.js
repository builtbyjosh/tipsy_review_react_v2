import React from "react";
import { connect } from 'react-redux'
import { selectedBrewery } from "../redux/actions/";

const BreweryList = ({ breweries }) => {
  return breweries.map((brewery) => {
    return (
      <div className="item" key={brewery.id}>
        <div
          className="content"
          onClick={() => {this.props.selectedBrewery(brewery); }}
        >
          <h3 className="ui header">{brewery.name}</h3>
        </div>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {breweries: state.breweries}
}

export default connect(mapStateToProps)(BreweryList);

