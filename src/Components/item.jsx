import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

class Item extends Component {
  render() {
    return (
      <div>
        <Image
          src={this.props.username.imgPath}
          className="img-responsive img-circle"
          style={{ width: '200px', height: '300px' }}
          alt={this.props.username.name}
        ></Image>

        <h5>{this.props.username.brand} </h5>
        <h6>{this.props.username.description} </h6>
        <h3>
          {this.formatPrice(this.getPrice(this.props.username.sizePriceMap))}
        </h3>
      </div>
    )
  }

  formatPrice(price) {
    return '$' + price.toString()
  }
  getPrice(sizePriceMap) {
    for (var key in sizePriceMap) {
      return sizePriceMap[key]
    }
    return 999
  }
}

export default Item
