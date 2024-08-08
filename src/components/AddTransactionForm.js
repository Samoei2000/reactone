import React from "react";
import { useState } from "react";


function AddTransactionForm({onSubmission}) {
  const [formData, setFormData] =useState({ 
    date:"",
    description:"",
    category:"",
    amount:0
  })
  
  //get form values once filled
  function handleChange(event){
    setFormData({...formData,[event.target.name]: event.target.value})

  }
  function handleSubmit(event){
    event.preventDefault()
    onSubmission(formData) 
  }
  

  return (
    <div className="ui segment">
      <form className="ui form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date"   name="date" required />
          <input type="text"   name="description" placeholder="Description" required/>
          <input type="text"   name="category" placeholder="Category" required/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" required/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;