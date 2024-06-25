import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const List = () => {
  const data = [
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payable: "$100",
      paid: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payable: "$100",
      paid: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payable: "$100",
      paid: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payable: "$100",
      paid: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payable: "$100",
      paid: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payable: "$100",
      paid: "$000",
      due: "$000",
    },
    // ... (repeat this object 8 more times for a total of 9 rows)
  ];

  const tableStyle = {
    borderCollapse: "separate",
    borderSpacing: "0 8px",
    background: "#f8f9fa",
  };

  const cellStyle = {
    padding: "12px 16px",
    border: "none",
    backgroundColor: "white",
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#f8f9fa",
    fontWeight: "normal",
    color: "#6c757d",
  };

  return (
    <div style={{ padding: "20px" }}>
      <Table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>
              <input type="checkbox" />
            </th>
            <th style={headerStyle}>Invoice ID</th>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Customer</th>
            <th style={headerStyle}>Payable Amount</th>
            <th style={headerStyle}>Paid Amount</th>
            <th style={headerStyle}>Due</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={cellStyle}>
                <input type="checkbox" />
              </td>
              <td style={{ ...cellStyle, color: "#007bff" }}>
                {row.invoiceId}
              </td>
              <td style={cellStyle}>{row.date}</td>
              <td style={cellStyle}>{row.customer}</td>
              <td style={cellStyle}>{row.payable}</td>
              <td style={cellStyle}>{row.paid}</td>
              <td style={cellStyle}>{row.due}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
