import React, { Component } from 'react'
import axios from 'axios'
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
  Container,
} from 'react-bootstrap'
import '../css/addItem.css'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.handleItemSubmit = this.handleItemSubmit.bind(this)
    this.getSizeQuantityMap = this.getSizeQuantityMap.bind(this)
    this.getSizePriceMap = this.getSizePriceMap.bind(this)
  }
  state = {
    types: [
      {
        id: '',
        name: '',
      },
    ],
    brand: [
      {
        id: '',
        name: '',
      },
    ],
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Container>
              <div className="addItemForm">
                <Form onSubmit={this.handleItemSubmit}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">TYPE</Form.Label>
                      <Col>
                        <Form.Control size="sm" as="select" name="itemType">
                          {this.getAllTypes(this.state.types)}
                        </Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">BRAND</Form.Label>
                      <Col>
                        <Form.Control size="sm" as="select" name="itemBrand">
                          {this.getAllTypes(this.state.brand)}
                        </Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">NAME</Form.Label>
                      <Col>
                        <Form.Control size="sm" type="text" name="itemName" />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">DESCRIPTION</Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          name="description"
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">SECTION</Form.Label>
                      <Col>
                        <Form.Control size="sm" as="select" name="itemSection">
                          <option>MEN</option>
                          <option>WOMEN</option>
                          <option>BOYS</option>
                          <option>GIRLS</option>
                        </Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">SIZE AVAILABLE</Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Enter size in format x,y,z"
                          name="itemSize"
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">
                        QUANTITY AVAILABLE FOR SIZE
                      </Form.Label>
                      <Col>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Enter quantity in format x,y,z"
                          name="itemQuantity"
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">PRICE</Form.Label>
                      <Col>
                        <Form.Control size="sm" type="text" name="itemPrice" />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm">SELECT IMAGE</Form.Label>
                      <Col>
                        <Form.File name="itemImage" />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="sm"></Form.Label>
                      <Col>
                        <Button type="submit">SUBMIT</Button>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Form>
              </div>
            </Container>
          </Col>
          <Col>
            <Container>
              <Form onSubmit={this.handleTypeSubmit}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm">ADD NEW TYPE</Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text" name="newType" />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm">
                      SELECT SAMPLE IMAGE FOR NEW TYPE
                    </Form.Label>
                    <Col>
                      <Form.File name="typeImage" />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm"></Form.Label>
                    <Col>
                      <Button type="submit">SUBMIT</Button>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>

              <Form onSubmit={this.handleBrandSubmit}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm">ADD NEW BRAND</Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text" name="newBrand" />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm">
                      SELECT SAMPLE IMAGE FOR NEW BRAND
                    </Form.Label>
                    <Col>
                      <Form.File name="brandImage" />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm">SELECT BRAND LOGO</Form.Label>
                    <Col>
                      <Form.File name="logoImage" />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="sm"></Form.Label>
                    <Col>
                      <Button type="submit">SUBMIT</Button>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }

  handleItemSubmit(event) {
    let itemType = parseInt(event.target.itemType.value)
    let itemBrand = parseInt(event.target.itemBrand.value)
    let itemName = event.target.itemName.value
    let description = event.target.description.value
    let itemSection = event.target.itemSection.value
    let itemSize = event.target.itemSize.value
    let itemPrice = parseFloat(event.target.itemPrice.value)
    let itemImage = event.target.itemImage.value
    let itemQuantity = event.target.itemQuantity.value
    let sizeQuantityMap = this.getSizeQuantityMap(itemSize, itemQuantity)
    let sizePriceMap = this.getSizePriceMap(itemSize, itemPrice)

    const itemObj = {}
    itemObj['name'] = itemName
    itemObj['typeId'] = itemType
    itemObj['sizeQuantityMap'] = sizeQuantityMap
    itemObj['sizePriceMap'] = sizePriceMap
    itemObj['description'] = description
    itemObj['brandId'] = itemBrand
    itemObj['section'] = itemSection

    const item = JSON.stringify(itemObj)
    let data = new FormData()
    data.append(
      'item',
      new Blob([item], {
        type: 'application/json',
      }),
    )
    data.append('image', new Blob([itemImage]))
    let url = 'http://localhost:8080/addItem'

    const requestOptions = {
      method: 'POST',
      body: data,
    }
    fetch(url, requestOptions)
      .then((response) => {
        alert('sucess')
      })
      .catch((err) => {
        alert('error')
      })
  }
  getSizeQuantityMap(itemSize, itemQuantity) {
    let itemLst = itemSize.split(',')
    let quantityLst = itemQuantity.split(',')
    let sizeQuantityMap = {}
    itemLst.forEach((element, index) => {
      sizeQuantityMap[element] = parseInt(quantityLst[index])
    })
    return sizeQuantityMap
  }

  getSizePriceMap(itemSize, itemPrice) {
    let itemLst = itemSize.split(',')
    let sizePriceMap = {}
    itemLst.forEach((element, index) => {
      sizePriceMap[element] = itemPrice
    })
    return sizePriceMap
  }

  handleTypeSubmit(event) {
    console.log(event.target.newType.value)
    let newType = JSON.stringify(event.target.newType.value)
    let img = event.target.typeImage.value
    let url = 'http://localhost:8080/addType'

    let data = new FormData()
    data.append(
      'type',
      new Blob([newType], {
        type: 'application/json',
      }),
    )
    data.append('image', new Blob([img]))

    const requestOptions = {
      method: 'POST',
      body: data,
    }
    fetch(url, requestOptions)
      .then((response) => {
        alert('sucess')
      })
      .catch((err) => {
        alert('error')
      })
  }

  handleBrandSubmit(event) {
    console.log(event.target.newBrand.value)
    let newType = JSON.stringify(event.target.newBrand.value)
    let img = event.target.brandImage.value
    let logo = event.target.logoImage.value
    let url = 'http://localhost:8080/addBrand'

    let data = new FormData()
    data.append(
      'brand',
      new Blob([newType], {
        type: 'application/json',
      }),
    )
    data.append('image', new Blob([img]))
    data.append('logo', new Blob([logo]))

    const requestOptions = {
      method: 'POST',
      body: data,
    }
    fetch(url, requestOptions)
      .then((response) => {
        alert('sucess')
      })
      .catch((err) => {
        alert('error')
      })
  }

  getAllBrands(data) {
    alert('GetAll')
    return data.map((x, index) => {
      return <option key={index}>{x.name}</option>
    })
  }

  getAllTypes(data) {
    return data.map((x, index) => {
      console.log('x: ', x.name)
      return (
        <option key={index} value={x.id}>
          {x.name.toUpperCase()}
        </option>
      )
    })
  }

  componentDidMount() {
    let urlType = 'http://localhost:8080/getAllTypes'
    let urlBrand = 'http://localhost:8080/getAllBrands'

    const reqType = axios.get(urlType)
    const reqBrand = axios.get(urlBrand)

    axios
      .all([reqType, reqBrand])
      .then(
        axios.spread((...responses) => {
          this.setState({
            types: responses[0].data,
            brand: responses[1].data,
          })
        }),
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors)
      })
  }
}

export default AddItem
