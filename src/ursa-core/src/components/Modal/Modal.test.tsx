import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Modal.story';

const { BasicModal } = composeStories(stories);

window.scrollTo = jest.fn();

describe('components/Modal', () => {
  describe('<BasicModal />', () => {
    afterAll(() => {
      jest.clearAllMocks();
    });
    it('Initial Render to the DOM', () => {
      render(<BasicModal />);
      const titleText = BasicModal.args?.title as string;

      /** Modal Open Button is in the Document */
      const modalOpenBtn = screen.getByText(/^Open$/); // Gets the Modal Open Button
      expect(modalOpenBtn).toBeInTheDocument(); // Is In the Document

      /** See if Modal Title is Present */
      const modalTitle = screen.queryByText(titleText);
      expect(modalTitle).toBeNull();
    });

    it('Run Snapshot Test', () => {
      const ModalEl = renderer.create(<BasicModal />).toJSON();
      expect(ModalEl).toMatchSnapshot();
    });

    it('Open Modal', () => {
      render(<BasicModal />);
      const titleText = BasicModal.args?.title as string;
      const modalOpenBtn = screen.getByText(/^Open$/); // Gets the Modal Open Button

      /** Open the Modal */
      fireEvent.click(modalOpenBtn);

      /** Modal Title is in the Document */
      const modalTitle = screen.getByText(titleText);
      const modalBodyText = screen.getByText(/^Use Instagram posts*/);
      const submitBtn = screen.getByRole('button', { name: /^Submit$/ }); // Submit Button
      const cancelBtn = screen.getByRole('button', { name: /^Cancel$/ }); // Cancel Button
      const closeBtn = screen.getByRole('button', { name: '' }); // Close Button
      const iconEl = screen.getByTestId('icon-external'); // Close Icon

      /** Modal Elements are in the Document */
      expect(modalTitle).toBeInTheDocument();
      expect(modalBodyText).toBeInTheDocument();
      expect(cancelBtn).toBeInTheDocument();
      expect(submitBtn).toBeInTheDocument();
      expect(closeBtn).toBeInTheDocument();
      expect(iconEl).toBeInTheDocument();
      expect(closeBtn).toContainElement(iconEl);
    });

    it('Cancel Button functionality', () => {
      render(<BasicModal />);
      const titleText = BasicModal.args?.title as string;
      const modalOpenBtn = screen.getByText(/^Open$/); // Gets the Modal Open Button

      /** Open the Modal */
      fireEvent.click(modalOpenBtn);

      const modalTitle = screen.getByText(titleText); // Get Modal Title
      const modalBodyText = screen.getByText(/^Use Instagram posts*/); // Body Text
      const submitBtn = screen.getByRole('button', { name: /^Submit$/ }); // Submit Button
      const cancelBtn = screen.getByRole('button', { name: /^Cancel$/ }); // Cancel Button
      const closeBtn = screen.getByRole('button', { name: '' }); // Close Button

      /** Click the Cancel Button */
      fireEvent.click(cancelBtn);

      /** Modal and Modal Elements should Disappear */
      expect(modalTitle).not.toBeInTheDocument();
      expect(modalBodyText).not.toBeInTheDocument();
      expect(submitBtn).not.toBeInTheDocument();
      expect(cancelBtn).not.toBeInTheDocument();
      expect(closeBtn).not.toBeInTheDocument();
      expect(modalOpenBtn).toBeInTheDocument();
    });

    it('Submit Button functionality', () => {
      render(<BasicModal />);
      const titleText = BasicModal.args?.title as string;
      const modalOpenBtn = screen.getByText(/^Open$/); // Gets the Modal Open Button

      /** Open the Modal */
      fireEvent.click(modalOpenBtn);

      const modalTitle = screen.getByText(titleText); // Get Modal Title
      const modalBodyText = screen.getByText(/^Use Instagram posts*/); // Body Text
      const submitBtn = screen.getByRole('button', { name: /^Submit$/ }); // Submit Button
      const cancelBtn = screen.getByRole('button', { name: /^Cancel$/ }); // Cancel Button
      const closeBtn = screen.getByRole('button', { name: '' }); // Close Button

      /** Click the Cancel Button */
      fireEvent.click(submitBtn);

      /** Modal and Modal Elements should Disappear */
      expect(modalTitle).not.toBeInTheDocument();
      expect(modalBodyText).not.toBeInTheDocument();
      expect(submitBtn).not.toBeInTheDocument();
      expect(cancelBtn).not.toBeInTheDocument();
      expect(closeBtn).not.toBeInTheDocument();
      expect(modalOpenBtn).toBeInTheDocument();
    });

    it('Close Button functionality', () => {
      render(<BasicModal />);
      const titleText = BasicModal.args?.title as string;
      const modalOpenBtn = screen.getByText(/^Open$/); // Gets the Modal Open Button

      /** Open the Modal */
      fireEvent.click(modalOpenBtn);

      const modalTitle = screen.getByText(titleText); // Get Modal Title
      const modalBodyText = screen.getByText(/^Use Instagram posts*/); // Body Text
      const submitBtn = screen.getByRole('button', { name: /^Submit$/ }); // Submit Button
      const cancelBtn = screen.getByRole('button', { name: /^Cancel$/ }); // Cancel Button
      const closeBtn = screen.getByRole('button', { name: '' }); // Close Button

      /** Click the Cancel Button */
      fireEvent.click(closeBtn);

      /** Modal and Modal Elements should Disappear */
      expect(modalTitle).not.toBeInTheDocument();
      expect(modalBodyText).not.toBeInTheDocument();
      expect(submitBtn).not.toBeInTheDocument();
      expect(cancelBtn).not.toBeInTheDocument();
      expect(closeBtn).not.toBeInTheDocument();
      expect(modalOpenBtn).toBeInTheDocument();
    });
  });
});
