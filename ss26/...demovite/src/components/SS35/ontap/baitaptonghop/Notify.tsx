import React from "react";
import { Alert } from "react-bootstrap";

const Notify = () => {
  return (
    <Alert className="mt-2">
      Công việc đã hoàn thành : <b>0/10</b>{" "}
    </Alert>
  );
};

export default Notify;
