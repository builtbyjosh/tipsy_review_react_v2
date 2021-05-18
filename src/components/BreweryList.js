import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedBrewery } from "../redux/actions/";

class BreweryList extends Component {
  render() {
    {
      if (this.props.breweries.length > 0) {
        return (
          <>
            <h2>Search Results: {this.props.breweries.length}</h2>
            {this.props.breweries.map((brewery) => {
              return (
                <div className="item" key={brewery.id}>
                  <div
                    className="content"
                    onClick={(e) => {
                      this.props.selectedBrewery(brewery);
                    }}
                  >
                    <p className="ui header">{brewery.name}</p>
                  </div>
                </div>
              );
            })}
          </>
        );
      }
    }
    return <></>;
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries };
};

export default connect(mapStateToProps, { selectedBrewery })(BreweryList);
