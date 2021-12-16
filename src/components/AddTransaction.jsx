import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const changeTextHandler = (event) => {
        setText(event.target.value)
    }

    const changeAmountHandler = (event) => {
        setAmount(event.target.value)
    }

    const uniqId = uuidv4();

    const newTransaction = {
        id: uniqId,
        text: text,
        amount: Number(amount)
    }

    const addTransactionHandler = (e) => {
      e.preventDefault();
      addTransaction(newTransaction)
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransactionHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={changeTextHandler}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={changeAmountHandler}/>
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
