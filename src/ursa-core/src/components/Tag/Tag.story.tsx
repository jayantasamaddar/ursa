import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";
import { ThemeProvider } from "../ThemeProvider";
import { darkTheme, lightTheme } from "../../styles";

interface TagProps {
  [name: string]: string;
}

const MultiTags: TagProps[] = [
  { name: "Cancelled" },
  { name: "Returned" },
  { name: "Restocked" },
  { name: "Exchanged" },
];

export default {
  title: "Components/Tag",
  component: Tag,
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

const MultiTagTemplate: ComponentStory<typeof Tag> = (args) => {
  const [tags, setTags] = useState(MultiTags);

  const handleRemove = (name: string) => {
    setTags(tags.filter((tag) => tag.name !== name));
  };

  return (
    <div className="Ursa-MultiTags" style={{ display: "flex", gap: "10px" }}>
      {tags.map((tag) => (
        <Tag
          key={tag.name}
          name={tag.name}
          onRemove={() => handleRemove(tag.name)}
        />
      ))}
    </div>
  );
};

export const BasicTag = Template.bind({});
BasicTag.args = {
  name: "Paid",
  onRemove: undefined,
};

export const ClickableTag = Template.bind({});
ClickableTag.args = {
  name: "Fulfilled",
  onClick: () => alert("Clicked"),
  onRemove: undefined,
};

export const RemovableTag = MultiTagTemplate.bind({});
