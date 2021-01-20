import React, { Component } from 'react'
import './App.css'
// import Item from './Components/item'
import TopMenuBar from './Components/topMenuBar'
import ShopByCat from './Components/shopByCat'
import ShopByBrand from './Components/shopByBrand'
import AddItem from './Components/addItem'
import Home from './Components/home'
import { Route, BrowserRouter as Router } from 'react-router-dom'

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
      <Router>
      <main>
        <div>{this.topNav()}</div>
        
        <Route path="/" component={Home} exact/>
        <Route path="/addItem" component={AddItem}/>
        
      </main>
      </Router>
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
