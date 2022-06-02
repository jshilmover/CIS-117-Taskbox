import React from "react";
import PropTypes from "prop-types";

export function TaskView({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Enter your title"
        />
      </div>
      <div className="actions">
        {state !== "TASK_ARCHIVED" && (
          <a onClick={}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
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
