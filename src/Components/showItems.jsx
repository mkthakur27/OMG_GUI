import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../css/showItems.css'
import Item from './item'

class ShowItems extends Component {
  constructor(props) {
    super(props)
    this.handleSectionClick = this.handleSectionClick.bind(this)
  }
  state = {
    sections: [
      { id: 1, value: 'MEN', isChecked: false },
      { id: 2, value: 'WOMEN', isChecked: false },
      { id: 3, value: 'BOYS', isChecked: false },
      { id: 4, value: 'GIRLS', isChecked: false },
    ],
    items: [
      {
        id: 0,
        name: null,
        typeId: 0,
        imgPath: null,
        sizeQuantityMap: {},
        sizePriceMap: {},
        description: null,
        brandId: 0,
        section: null,
      },
    ],
  }
  render() {
    return (
      <Row>
        <Col sm="3">
          <Container>
            <h3>FILTERS</h3>
            <ul className="border">
              {this.state.sections.map((eachSection) => {
                return (
                  <li>
                    <input
                      key={eachSection.id}
                      onClick={this.handleSectionClick}
                      type="checkbox"
                      checked={eachSection.isChecked}
                      value={eachSection.value}
                    />{' '}
                    {eachSection.value}
                  </li>
                )
              })}
            </ul>
          </Container>
        </Col>
        <Col>
          <Container>
            <Row>{this.getAllItems(this.state.items)}</Row>
          </Container>
        </Col>
      </Row>
    )
  }
  handleSectionClick(event) {
    let sections = this.state.sections
    sections.forEach((eachSection) => {
      if (eachSection.value === event.target.value)
        eachSection.isChecked = event.target.checked
    })
    this.setState({ sections: sections })
  }

  componentDidMount() {
    const pageName = this.props.match.params.pageFrom
    let targetUrl = ''
    if (pageName === 'shopByCat') {
      targetUrl = `http://localhost:8080/getItemsByType/${this.props.match.params.typeId}`
    } else if (pageName === 'shopByBrand') {
      targetUrl = `http://localhost:8080/getItemsByBrand/${this.props.match.params.typeId}`
    }
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
            items: Response,
          })
        },
        (error) => {
          alert('error')
        },
      )
  }
  getAllItems(data) {
    console.log(data)
    return data.map((elm, index) => {
      return <Item item={elm} />
    })
  }
}

export default ShowItems
