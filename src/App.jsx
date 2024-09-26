import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div class="wrapper pt-5">
        {/* <!-- title--> */}
        <div class="container">
          <h1 class="text-center">Time Scheduler</h1>
          {/* <!-- Form --> */}
          <form
            onsubmit="handleSubmit(this)"
            action="javascript:void(0)"
            class="border p-5 rounded shadow-lg mt-5"
          >
            <div class="row g-2">
              <div class="col-md-7">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Task"
                  aria-label="First name"
                  name="task"
                />
              </div>
              <div class="col-md-2">
                <input
                  type="number"
                  class="form-control"
                  placeholder="hours"
                  aria-label="Last name"
                  name="hr"
                  min="1"
                />
              </div>
              <div class="col-md-3 d-grid">
                <button class="btn btn-primary">Add new Task</button>
              </div>
            </div>
          </form>
          {/* <!-- Tables --> */}
          <div class="row mt-5">
            {/* <!-- Entry List table --> */}
            <div class="col-md">
              <h3 class="text-center">Entry List</h3>
              <hr />
              <table class="table table-striped table-hover border">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tasks</th>
                    <th scope="col">Time(hrs)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody id="taskList"></tbody>
              </table>
            </div>
            {/* <!-- Not to do list table --> */}
            <div class="col-md">
              <h3 class="text-center">Not to be done</h3>
              <hr />
              <table class="table table-striped table-hover border">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tasks</th>
                    <th scope="col">Time(hrs)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody id="badList"></tbody>
              </table>
              <div class="alert alert-success">
                You can save <span id="savedhours">0</span> hrs
              </div>
            </div>
            <div class="alert alert-success">
              The total hours allocated is <span id="totalhours">0</span> hrs
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
