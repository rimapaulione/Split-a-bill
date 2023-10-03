import { useState } from "react";
import Button from "./Button";

export default function FromSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function splitBillHandler(e) {
    e.preventDefault();
    if (!bill || !userExpense || userExpense > bill) return;
    onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={splitBillHandler}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) =>
          isNaN(e.target.value)
            ? alert("Input have to be a number.")
            : setBill(Number(e.target.value))
        }
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          isNaN(e.target.value)
            ? alert("Input have to be a number.")
            : setUserExpense(Number(e.target.value))
        }
      />

      <label>👫 {selectedFriend.name} expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
