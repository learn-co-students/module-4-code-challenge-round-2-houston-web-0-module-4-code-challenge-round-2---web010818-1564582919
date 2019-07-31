import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import { transactions } from '../transactionsData'

class AccountContainer extends Component {
    // constructor() {
    //   super()
    //   // get a default state working with the data imported from TransactionsData
    //   // use this to get the functionality working
    //   // then replace the default transactions with a call to the API
    // }
  state = {
    allTransactions: [],
    searchedTerm: ''

  }
  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactionData => this.setState({
        allTransactions: transactionData
      }))
  }
  handleSearchChange = (typedInfo) => {
    this.setState({ searchedTerm: typedInfo })
  }
  
  render() {
    // console.log(this.state.allTransactions)
    const searchedTransaction = this.state.allTransactions.filter(transaction =>
      transaction.description.includes(this.state.searchedTerm))
    return (
      <div>
        <Search onSearch={this.handleSearchChange} searchedTerm={this.state.searchedTerm}/>
        <TransactionsList transactions={searchedTransaction}/>
      </div>
    )
  }
}

export default AccountContainer
