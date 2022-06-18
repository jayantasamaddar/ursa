import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { darkTheme, lightTheme } from "../../styles";

import Modal from "./Modal";
import { Button } from "../Button";

export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ children, ...args }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Ursa-ModalProvider">
      <Button onClick={() => setOpenModal(true)}>Open</Button>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        primaryButton={{ name: "Submit" }}
        {...args}
      >
        <div>
          <p>
            Use Instagram posts to share your products with millions of people.
            Let shoppers buy from your store without leaving Instagram.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export const BasicModal = Template.bind({});

BasicModal.args = {
  title: "Reach more shoppers with Instagram product tags",
};
