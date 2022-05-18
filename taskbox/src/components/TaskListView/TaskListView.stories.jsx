import React from "react";
import { TaskListView } from "./TaskListView";

export default {
  title: "Components/TaskListView",
  component: TaskListView,
};

const Template = (args) => <TaskListView {...args} />;
export const Default = Template.bind({});
