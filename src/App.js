import React, { Component } from 'react'
import './App.css'
// import Item from './Components/item'
import TopMenuBar from './Components/topMenuBar'
import ShopByCat from './Components/shopByCat'
import ShopByBrand from './Components/shopByBrand'
import AddItem from './Components/addItem'

class App extends Component {
  state = {
    data: [
      {
        id : 0,
        name: '',
        imgPath: ""
      }
    ]
  }
  render() {
    // const homebody = this.state.data.map((elm,index) => {
    //   console.log("elm ",elm)
    //   return <Item key = {index} username={elm} />
    // })
    // return <main>{homebody}</main>
    return (
      <main>
        <div>{this.topNav()}</div>
        {/* <div>{homebody}</div> */}
        <div>
          <ShopByCat/>
        </div>
        <div>
          <ShopByBrand/>
        </div>
      </main>
    )
    // return (
    //   <main>
    //     <div>
    //       <AddItem/>
    //     </div>
    //   </main>
    // )
  }

  topNav()
  {
    return <TopMenuBar/>
  }
  

  componentDidMount() {
    const targetUrl = 'http://localhost:8080/getItemsByType/1'
    fetch(targetUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'}
    })
      .then((res) => res.json())
      .then((Response) => {
        console.log(Response)
        this.setState({
          data: Response
        });
      },
      (error) => {
        alert("error")
      })
  }
}

export default App
