import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

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
  uppercase: false,
};

export const Alert = Template.bind({});
Alert.args = {
  children: "Button",
  uppercase: false,
  alert: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Button",
  uppercase: false,
  outline: true,
  alert: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  uppercase: false,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Button",
  uppercase: false,
  loading: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Button",
  uppercase: false,
  fullWidth: true,
};
