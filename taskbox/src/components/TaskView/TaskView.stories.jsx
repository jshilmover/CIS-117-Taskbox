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
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind();
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

export const LongTitle = Template.bind();
LongTitle.args = {
  task: {
    ...Default.args.task,
    title:
      "This is a very very very very very very very very very large absurdly large big title that will show how a long long very long title behaves in the task",
  },
};
