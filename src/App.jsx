import { useState } from "react";
import "./App.css";
import { FormComponent } from "./Components/FormComponent";
import { TableComponent } from "./Components/TableComponent";
const allocatedHoursPerWeek = 24 * 7;
const App = () => {
  const [taskList, setTaskList] = useState([]);

  const randomIdGenerator = (length) => {
    const randomString = "1234567890qwertyuiopasdfghjklzxcvbnm";
    let uniqueId = "Task-";
    for (let i = 0; i < length; i++) {
      const randomNumIndex = Math.floor(Math.random() * randomString.length);
      uniqueId += randomString[randomNumIndex];
    }
    return uniqueId;
  };
  const addTask = (taskObj) => {
    const obj = {
      ...taskObj,
      uniqueId: randomIdGenerator(4),
      type: "entry",
    };
    if (taskObj.hr > allocatedHoursPerWeek) {
      alert(
        `Sorry, total allocated hours per week is ${allocatedHoursPerWeek} hours`
      );
      return;
    }
    if (totalhours + taskObj.hr > allocatedHoursPerWeek) {
      alert(
        `Sorry, you exceeded total allocated hours per week: ${allocatedHoursPerWeek} hrs`
      );
      return;
    }
    setTaskList([...taskList, obj]);
  };
  const handleDeleteAction = (id) => {
    if (window.confirm("Are you sure, you wanna remove this task?")) {
      const filteredEntryList = taskList.filter((item) => item.uniqueId != id);
      // console.log(filteredEntryList);
      setTaskList(filteredEntryList);
    }
  };
  const handleSwitchAction = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.uniqueId === id) {
          item.type = type;
        }
        return item;
      })
    );
  };
  const totalhours = taskList.reduce(
    (acc, item) => acc + parseFloat(item.hr),
    0
  );
  return (
    <>
      <div className="wrapper pt-5">
        {/* <!-- title--> */}
        <div className="container">
          <h1 className="text-center">Time Scheduler</h1>
          {/* <!-- Form --> */}
          <FormComponent addTask={addTask} />
          {/* <!-- Tables --> */}
          <TableComponent
            taskList={taskList}
            handleSwitchAction={handleSwitchAction}
            handleDeleteAction={handleDeleteAction}
          />
          <div className="alert alert-success">
            The total hours allocated is{" "}
            <span id="totalhours">{totalhours}</span> hrs
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
