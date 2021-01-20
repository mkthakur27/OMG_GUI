import React, { Component } from 'react'
import ShopByBrand from '../Components/shopByBrand'
import ShopByCat from '../Components/shopByCat'
class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <ShopByCat />
        <ShopByBrand />
      </div>
    )
  }
}

export default Home
