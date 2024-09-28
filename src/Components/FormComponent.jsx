/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const FormComponent = ({ addTask }) => {
  const [taskObj, setTask] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...taskObj,
      [name]: name === "hr" ? +value : value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTask(taskObj);
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className="border p-5 rounded shadow-lg mt-5"
    >
      <div className="row g-2">
        <div className="col-md-7">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            aria-label="First name"
            name="task"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="hours"
            aria-label="Last name"
            name="hr"
            min="1"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3 d-grid">
          <button className="btn btn-primary">Add new Task</button>
        </div>
      </div>
    </form>
  );
};
