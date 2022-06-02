import React from "react";
import { Provider } from "react-redux";
import * as TaskListStories from "../../components/TaskListView/TaskListView.stories";
import { actions } from "../../lib/redux";
import { HomePage } from "./HomePage";
import { action } from "@storybook/addon-actions";

//Mock up redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  title: "Pages/Home",
  component: HomePage,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
/*
Default.args = {
  error: "",
  loading: false,
  tasks: [...TaskListStories.TasksPinnedAtTop.args.tasks],
};
*/

export const Error = Template.bind({});
Error.args = {
  error: "Error message goes here",
};
