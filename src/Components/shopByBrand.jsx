import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/shopByBrand.css'

class ShopByBrand extends Component {
  state = {
    data: [
      {
        id: '',
        name: '',
        imgPath: '',
        imgLogoPath: '',
      },
    ],
  }

  render() {
    return (
      <Container>
        <p className="headerText">SHOP TOP BRANDS</p>
        <Row>{this.getColumn(this.state.data.slice(0, 6))}</Row>
        <Row>{this.getColumn(this.state.data.slice(6, 12))}</Row>
      </Container>
    )
  }

  componentDidMount() {
    const targetUrl = 'http://localhost:8080/getAllBrand'
    fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then(
        (Response) => {
          console.log(Response)
          this.setState({
            data: Response,
          })
        },
        (error) => {
          alert('error')
        },
      )
  }
  getColumn(data) {
    const pageName = 'shopByBrand'
    return data.map((elm, index) => {
      return (
        <Col key={index}>
          <Link
            to={{
              pathname: `showItem/${elm.id}/${pageName}`,
            }}
          >
            <img className="imageFile" src={elm.imgPath} alt={elm.name}></img>
          </Link>
          <img src={elm.logoImgPath} className="brandLogo" alt={elm.name}></img>
        </Col>
      )
    })
  }
}

export default ShopByBrand
