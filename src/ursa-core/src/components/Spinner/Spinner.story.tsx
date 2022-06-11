import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {
  size: "large",
};

export const SmallSpinner = Template.bind({});
SmallSpinner.args = {
  size: "small",
};
