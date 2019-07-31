import React from 'react'

export default class Search extends React.Component {
  render(){
  return (
    <div className="ui huge fluid icon input">
      <input type="text" placeholder={"Search your Recent Transactions"} value={this.props.searchTerm} onChange={e => this.props.onSearch(e.target.value)}/>
      <i className="circular search link icon"></i>
    </div>
  )
}
}
