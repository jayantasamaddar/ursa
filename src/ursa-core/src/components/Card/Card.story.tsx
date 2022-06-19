import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { darkTheme, lightTheme } from "../../styles";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Card>;

const fieldsObj = {
  email: "jayanta@zenius.one",
  phone: "+91-9888888888",
};

const fieldsData = Object.entries(fieldsObj);

const Template = ({ fields, ...args }) => (
  <Card {...args} fields={fieldsData} />
);

export const BasicCard = Template.bind({});

BasicCard.args = {
  name: "Jayanta Samaddar",
  //   image: "https://via.placeholder.com/150",
};
