import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todochild = () => {
  const tododata = useSelector((store) => store.todoreducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (input.trim()) {
      if (!editId) {
        const obj = {
          id: Math.floor(Math.random() * 1000),
          input,
        };
        dispatch({ type: "add", payload: obj });
      } else {
        dispatch({ type: "update", payload: { id: editId, input } });
        setEditId(null);
      }
      setInput("");
    } else {
      alert("Task cannot be empty");
    }
  };

  const editTask = (id) => {
    setEditId(id);
    const task = tododata.find((ele) => ele.id === id);
    if (task) {
      setInput(task.input);
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };

  return (
    <>
      <h1>Todo Child Component</h1>
      <div className="content">
        <input
          placeholder="Enter the Task"
          className="form-control"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={addTask}>{editId ? "Update Task" : "Add Task"}</button>
        <div className="main">
          {tododata.map((ele) => (
            <div className="mainfield" key={ele.id}>
              <p>{ele.input}</p>
              <div style={{ display: 'flex', justifyContent: "flex-end", gap: "10px" }}>
                <button className="updatebtn" onClick={() => editTask(ele.id)}>
                  Update
                </button>
                <button className="dltbtn" onClick={() => deleteTask(ele.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todochild;
