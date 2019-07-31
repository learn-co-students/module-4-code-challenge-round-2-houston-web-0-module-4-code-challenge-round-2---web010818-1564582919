import React from 'react'

export default class TransactionsList extends React.Component {
  render(){
    // console.log(this.props.transactions)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At 
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
    
        {this.props.transactions.map(transaction => {
          return(
              <tr>
                <td>
                  <p>{transaction.posted_at}</p>
                </td>
                <td>
                  <p>{transaction.description}</p>
                </td>
                <td>
                  <p>{transaction.category}</p>
                </td>
                <td>
                  <p>{transaction.amount}</p>
                </td>
              </tr>
          )
        })}

      </tbody>
    </table>
  )
}
}
