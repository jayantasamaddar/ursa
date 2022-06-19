import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { darkTheme, lightTheme } from "../../styles";

import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checkbox_with_Label = Template.bind({});
Checkbox_with_Label.args = {
  name: "agree",
  label: "Agree to the terms and conditions",
};

export const Checkbox_Indeterminate_with_Label_hidden = Template.bind({});
Checkbox_with_Label.args = {
  name: "agree",
  label: "Agree to the terms and conditions",
  labelHidden: true,
  indeterminate: true,
};
