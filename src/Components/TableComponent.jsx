/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const TableComponent = ({
  taskList,
  handleSwitchAction,
  handleDeleteAction,
}) => {
  const badList = taskList.filter((task) => task.type === "bad");
  const savedHours = badList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);
  return (
    <div className="row mt-5">
      {/* <!-- Entry List table --> */}
      <div className="col-md">
        <h3 className="text-center">Entry List</h3>
        <hr />
        <table className="table table-striped table-hover border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tasks</th>
              <th scope="col">Time(hrs)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="entryList">
            {taskList
              .filter((item) => item.type === "entry")
              .map((task, i) => {
                return (
                  <tr key={task.uniqueId}>
                    <th scope="row">{i + 1}</th>
                    <td>{task.task}</td>
                    <td>{task.hr}</td>
                    <td className="text-end">
                      <button
                        onClick={() => handleDeleteAction(task.uniqueId)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button
                        onClick={() => handleSwitchAction(task.uniqueId, "bad")}
                        className="btn btn-success"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <!-- Not to do list table --> */}
      <div className="col-md">
        <h3 className="text-center">Not to be done</h3>
        <hr />
        <table className="table table-striped table-hover border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tasks</th>
              <th scope="col">Time(hrs)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="badList">
            {taskList
              .filter((item) => item.type === "bad")
              .map((task, i) => {
                return (
                  <tr key={task.uniqueId}>
                    <th scope="row">{i + 1}</th>
                    <td>{task.task}</td>
                    <td>{task.hr}</td>
                    <td className="text-end">
                      <button
                        onClick={() =>
                          handleSwitchAction(task.uniqueId, "entry")
                        }
                        className="btn btn-warning"
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteAction(task.uniqueId)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="alert alert-success">
          You can save {""}
          <span id="savedhours">{savedHours}</span> hrs
        </div>
      </div>
    </div>
  );
};
