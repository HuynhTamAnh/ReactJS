import React from "react";
import "../css/Content1.css"; // Đảm bảo bạn đã tạo file CSS này

const Content1 = () => {
  return (
    <div>
      <h4>Sales Information</h4>
      <div className="d-flex">
        <div className="p-3 flex-fill">Customer</div>
        <div className="p-3 flex-fill">Invoice ID</div>
        <div className="p-3 flex-fill">Start Date</div>
        <div className="p-3 flex-fill">End Date</div>
      </div>
      <div className="d-flex">
        <input
          className="p-1 flex-fill input-small"
          placeholder="Enter Customer Name"
        />
        <input
          className="p-1 flex-fill input-small"
          placeholder="Enter Invoice ID"
        />
        <input className="p-1 flex-fill input-small" placeholder="Start Date" />
        <input className="p-1 flex-fill input-small" placeholder="End Date" />
      </div>
    </div>
  );
};

export default Content1;
