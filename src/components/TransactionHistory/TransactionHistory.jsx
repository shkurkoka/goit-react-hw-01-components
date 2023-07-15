import React from "react";
import "./Transactions.css";

const TransactionHistory = ({transactionsData}) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="table-head">Type</th>
          <th className="table-head">Amount</th>
          <th className="table-head">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsData.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;