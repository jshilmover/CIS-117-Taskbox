import React from "react";
import TaskListView from "../../components/TaskListView/TaskListView";
import PropTypes from "prop-types";

export function HomePage({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox App - Spring 2022</span>
        </h1>
      </nav>
      <TaskListView />
    </div>
  );
}

HomePage.propTypes = {
  error: PropTypes.string,
};

HomePage.defaultProps = {
  error: null,
};