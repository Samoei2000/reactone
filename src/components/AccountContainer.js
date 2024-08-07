

import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = listOfTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setListOfTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} listOfTransactions={listOfTransactions} />
    </div>
  );
}

export default AccountContainer;

