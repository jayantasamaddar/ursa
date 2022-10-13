import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';

import { Modal } from './Modal';
import { Button } from '../Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [(Story) => <Story />]
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ children, ...args }) => {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = () => {
    setOpenModal(false);
    setTimeout(() => alert('Submitted'), 200);
  };

  return (
    <div className="Ursa-ModalProvider">
      <Button primary onClick={() => setOpenModal(true)}>
        Open
      </Button>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        primaryButton={{ name: 'Submit', onClick: () => onSubmit() }}
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
  title: 'Reach more shoppers with Instagram product tags'
};
