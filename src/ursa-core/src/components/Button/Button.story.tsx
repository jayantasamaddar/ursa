import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const Alert = Template.bind({});
Alert.args = {
  children: "Button",
  alert: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Button",
  outline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Button",
  loading: true,
};
