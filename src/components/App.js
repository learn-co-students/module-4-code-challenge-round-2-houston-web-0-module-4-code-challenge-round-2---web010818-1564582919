import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'




class App extends Component {

  state ={
    transactions:[],
    keyword:""
  }

  componentDidMount =() =>{
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions:data
      })
    })
  }

  chaching =(searchValue) =>{
    // console.log(searchValue)
    this.setState({
      keyword:searchValue
    })
  }



  render() {
    // console.log(this.state.transactions,"plus ultra")
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
        <AccountContainer transactions={this.state.keyword == "" ? 
        this.state.transactions : 
        this.state.transactions.filter(t => { return  t.description.toLowerCase().includes(this.state.keyword) || t.category.toLowerCase().includes(this.state.keyword)})} chaching={this.chaching}/>

      </div>
    )
  }
}

export default App
