//a simple redux store/actions/reducer
import { createStore } from "redux";

//Actions
export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

function changeState(taskState) {
  return (state, action) => {
    return {
      ...state,
      task: state.task.map((task) => {
        return task.id === action.id ? { ...task, state: taskState } : task;
      }),
    };
  };
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return changeState("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return changeState("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "Task 1", state: "TASK_INBOX" },
  { id: "2", title: "Task 2", state: "TASK_INBOX" },
  { id: "3", title: "Task 3", state: "TASK_INBOX" },
  { id: "4", title: "Task 4", state: "TASK_PINNED" },
  { id: "5", title: "Task 5", state: "TASK_ARCHIVED" },
];

export default createStore(reducer, {tasks: defaultTasks})