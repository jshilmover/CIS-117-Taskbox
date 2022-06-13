import React from "react";
import * as TaskStories from "../../components/TaskListView/TaskListView.stories";
import { HomePage } from "./HomePage";

export default {
  title: "Pages/Home",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: "",
  loading: false,
  tasks: [...TaskStories.TasksPinnedAtTop.args.tasks],
};

export const Error = Template.bind({});
Error.args = {
  error: "Error message goes here",
  loading: true,
  tasks: [],
};

export const LoadWithNoTasks = Template.bind({});
LoadWithNoTasks.args = {
  error: "",
  loading: false,
  tasks: [],
};
