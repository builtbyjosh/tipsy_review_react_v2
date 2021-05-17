import React, { Component } from 'react'
import BreweryContainer from "./BreweryContainer";
import SearchContainer from './SearchContainer'

 class App extends Component {
  render() {
    return (
      <div>
        <h1 className='ui container'>Brewery Container - eventually going to be nav bar</h1>
      <hr />
      <div className="ui container grid">
        <BreweryContainer />
        {/* <SearchContainer /> */}
      </div>
      </div>
    )
  }
}
export default App