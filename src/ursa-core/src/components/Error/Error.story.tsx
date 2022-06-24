import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../../styles";

import { Error } from ".";

export default {
  title: "Components/Error",
  component: Error,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const BasicError = Template.bind({});

BasicError.args = {
  children: "This is an error message",
};
