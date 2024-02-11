import React from "react";
import "./ToDoList.css";
import { Col } from "react-bootstrap";

const ToDoList = () => {
  return (
    <>
      <section className="main_todo">
        <div className="container">
          <div className="main">
            <div className="todo-app">
              <div className="app-title">
                <h2>To-do app</h2>
                <i className="fa-solid fa-book-bookmark"></i>
              </div>
              <div className="row">
                <input
                  type="text"
                  id="input-box"
                  placeholder="add your tasks"
                  className="ps-4"
                />
                <button className="add_button">Add</button>
              </div>
              <ul className="list-group">
                <li>mn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToDoList;
