import React from "react";
import { TaskView } from "./TaskView";

export default {
  title: "Components/TaskView",
  component: TaskView,
};

const Template = (args) => <TaskView {...args} />;

export const Default = Template.bind();
Default.args = {};

export const Pinned = Template.bind();
Pinned.args = {};

export const Archived = Template.bind();
Archived.args = {};

export const LongTitle = Template.bind();
LongTitle.args = {};
