import React, { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [ listOfTransactions ,setListOfTransactions] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      date,
      description,
      category,
      amount,
    };
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setListOfTransactions((prevState) => [...prevState, data]);
          window.location.reload()
        }
      
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="ui segment">
        <form className="ui form" >
          <div className="inline fields">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              
            />
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              value={category}
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="number"
              value={amount}
              placeholder="Amount"
              step="0.01"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
      <div className="transaction-list">
{/*       
          {listOfTransactions.map((transaction, index) => (
            <li key={index}>
              {transaction.date} - {transaction.description} -{" "}
              {transaction.category} - ${transaction.amount}
            </li>
          ))} */}
        
      </div>
    </>
  );
}

export default AddTransactionForm;
