import React, { Component } from 'react'
import './App.css'
// import Item from './Components/item'
import TopMenuBar from './Components/topMenuBar'
import AddItem from './Components/addItem'
import Home from './Components/home'
import ShowItem from './Components/showItems'
import Login from './Components/login'
import Register from './Components/register'
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
        <Route path="/showItem/:typeId/:pageFrom" component={ShowItem}/>
        
      </main>
      </Router>
    )
  }

  topNav()
  {
    return <TopMenuBar/>
  }
}

export default App
