import React, { Component } from 'react'
import BreweryDetails from './BreweryDetails'
import BreweryList from './BreweryList'

export default class BreweryContainer extends Component {
  render() {
    return (
      <div>
        <h1>Container</h1>
        <BreweryList />
        <BreweryDetails />
      </div>
    )
  }
}
