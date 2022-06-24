import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../../styles";

import { Select } from "../Select";

export default {
  title: "Components/Select",
  component: Select,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  name: "order_type",
  label: "Order Type",
  options: [
    { label: "Prepaid", value: "prepaid" },
    { label: "COD", value: "cod" },
  ],
};
