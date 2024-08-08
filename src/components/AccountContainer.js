import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredTransactions = listOfTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setListOfTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function handleNewTransaction(newTransaction) {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((addedTransaction) => {
        setListOfTransactions((prev) => [...prev, addedTransaction]);
      })
      .catch((error) => console.log(error));
  }


  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTransactionForm  onSubmission={handleNewTransaction}/>
      <TransactionsList  listOfTransactions={filteredTransactions} />
      
    </div>
  );
}

export default AccountContainer;