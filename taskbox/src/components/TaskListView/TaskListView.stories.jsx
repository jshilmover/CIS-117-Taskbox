import React from "react";
import * as TaskStories from "../TaskView/TaskView.stories";
import { TaskListView } from "./TaskListView";

export default {
  title: "Components/TaskListView",
  component: TaskListView,
};

const Template = (args) => <TaskListView {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  tasks: [
    {
      ...TaskStories.Default.args,
      id: "1",
      title: "Test Task 1",
    },
    {
      ...TaskStories.Default.args,
      id: "2",
      title: "Test Task 2",
    },
    {
      ...TaskStories.Default.args,
      id: "3",
      title: "Test Task 3",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  tasks: [],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  tasks: [],
};