import React from "react";
import { TaskView } from "./TaskView";

export default {
  title: "Components/TaskView",
  component: TaskView,
};

const Template = (args) => <TaskView {...args} />;

export const Default = Template.bind();
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind();
Pinned.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Archived = Template.bind();
Archived.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const LongTitle = Template.bind();
LongTitle.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};
