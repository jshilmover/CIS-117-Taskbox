import React from "react";
import { TaskListView } from "../../components/TaskListView/TaskListView";

export function HomePage({ error, loading, tasks, onPinTask, onArchiveTask }) {
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
      <TaskListView loading={loading} tasks={tasks} />
    </div>
  );
}
