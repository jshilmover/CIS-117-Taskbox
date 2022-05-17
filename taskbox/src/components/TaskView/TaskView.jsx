import React from "react";
import PropTypes from "prop-types";

export function TaskView({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return <h1>This is a test</h1>;
}

TaskView.propTypes = {
  //Composition of the task
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  //Event to change the task to archived
  onArchiveTask: PropTypes.func,
  //Event to change task to pinned
  onPinTask: PropTypes.func,
};
