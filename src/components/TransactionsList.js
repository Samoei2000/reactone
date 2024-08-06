import React from "react";
import Transaction from "./Transaction";
 

function TransactionsList({transactions}) {
  
  return (
    <table className="ui celled striped paddedbody:JSON.stringify(data),
  }).then((res) =>{
    if(res.ok){
      setListOfTransactions (prevState => [...prevState, data]);
    }
  })
  .catch(error)(
    console.log(error)
  )

  
} table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
