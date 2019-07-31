import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
import Transaction from './Transaction';
// import 

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange(event) {
    // your code here
  }

  render() {
    // console.log(transactions)
    // console.log(this.props.transactions)
    return (
      <div>
        <Search chaching={this.props.chaching} />
        <TransactionsList transactions={ this.props.transactions }/>
        {/* {this.props.transactions.map(t =>{
         return <Transaction t={t}/>
        })} */}
        
     </div>
    )
  }
}

export default AccountContainer
