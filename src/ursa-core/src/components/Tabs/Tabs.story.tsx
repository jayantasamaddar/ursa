import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { darkTheme, lightTheme } from "../../styles";

import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Tabs>;

const itemsData = [
  {
    label: "Overview",
    content: <div>This is the Overview Tab</div>,
    active: true,
  },
  {
    label: "Transactions",
    content: <div>This is the Transactions Tab</div>,
  },
  {
    label: "Comments",
    content: <div>This is the Comments Tab</div>,
  },
];

const Template: ComponentStory<typeof Tabs> = ({ items, ...args }) => (
  <Tabs {...args} items={itemsData} />
);

export const DefaultTabs = Template.bind({});

export const VerticalTabs = Template.bind({});

VerticalTabs.args = {
  layout: "vertical",
};
