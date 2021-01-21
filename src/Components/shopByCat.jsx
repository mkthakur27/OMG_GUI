import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/shopByCat.css'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class ShopByCat extends Component {
  state = {
    data: [
      {
        id: '',
        name: '',
        imgPath: '',
      },
    ],
  }
  render() {
    return (
      <Container>
        <p className="headerText">SHOP CATAGORIES</p>
        <Row>{this.getColumn(this.state.data.slice(0, 6))}</Row>
        <Row>{this.getColumn(this.state.data.slice(6, 12))}</Row>
      </Container>
    )
  }

  componentDidMount() {
    const targetUrl = 'http://localhost:8080/getAllTypes'
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
    return data.map((elm, index) => {
      return (
        <Col key={index}>
          <Link to="/showItem" typeId={elm.id}>
            <img
              className="imageFile"
              src={elm.imgPath}
              className="imageFile"
            ></img>
          </Link>
          <p className="text-capitalize imageText font-weight-bold pt-1">
            {elm.name}
          </p>
        </Col>
      )
    })
  }
}

export default ShopByCat
