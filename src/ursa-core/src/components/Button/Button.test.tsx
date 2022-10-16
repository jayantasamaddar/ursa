import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.story';

const {
  Basic,
  Primary,
  Outline,
  Alert,
  Disabled,
  Loading,
  FullWidth,
  IconButton,
  IconOnlyButton,
  Upload_button_for_single_PDF_upload,
  Upload_Button_for_multiple_files,
  Outline_Button_with_External_Link
} = composeStories(stories);

describe('components/Button', () => {
  describe('Renders Button', () => {
    describe('Tests Basic Button', () => {
      it('Basic Button - Snapshot Test', () => {
        /** Snapshot Testing */
        const tree = renderer.create(<Basic />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('Test the onClick function', () => {
        const click = jest.fn();
        render(<Basic />);
        const buttonEl = screen.getByRole('button');
        /**Spy on the window.alert of hidden upload button */
        const spy = jest.spyOn(window, 'alert').mockImplementation(click);
        /** Simulate the click event on the button */
        fireEvent.click(buttonEl);

        expect(spy).toHaveBeenCalledTimes(1); // Expect the alert
      });
    });

    describe('Tests Primary Button', () => {
      it('Primary Button - Snapshot Test', () => {
        /** Snapshot Testing */
        const tree = renderer.create(<Primary />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('Test the onClick function', () => {
        const click = jest.fn();
        render(<Primary />);
        const buttonEl = screen.getByRole('button');
        /**Spy on the window.alert of hidden upload button */
        const spy = jest.spyOn(window, 'alert').mockImplementation(click);
        /** Simulate the click event on the button */
        fireEvent.click(buttonEl);

        expect(click).toHaveBeenCalledTimes(1); // Click happened
      });
    });

    describe('Tests Outline Button', () => {
      it('Renders Outline Button', () => {
        /** Snapshot Testing */
        const tree = renderer.create(<Outline />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('Test the onClick function', () => {
        const click = jest.fn();
        render(<Outline />);
        const buttonEl = screen.getByRole('button');
        /**Spy on the window.alert of hidden upload button */
        const spy = jest.spyOn(window, 'alert').mockImplementation(click);
        /** Simulate the click event on the button */
        fireEvent.click(buttonEl);

        expect(click).toHaveBeenCalledTimes(1); // Click happened
      });
    });

    describe('Tests Alert Button', () => {
      it('Renders Alert Button', () => {
        const click = jest.fn();
        render(<Alert onClick={click} />);
        const buttonEl = screen.getByRole('button');
        fireEvent.click(buttonEl);
        expect(click).toBeCalledTimes(1); // Click is triggered

        /** Snapshot Testing */
        const tree = renderer.create(<Alert />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('Test the onClick function', () => {
        const click = jest.fn();
        render(<Alert />);
        const buttonEl = screen.getByRole('button');
        /**Spy on the window.alert of hidden upload button */
        const spy = jest.spyOn(window, 'alert').mockImplementation(click);
        /** Simulate the click event on the button */
        fireEvent.click(buttonEl);

        expect(click).toHaveBeenCalledTimes(1); // Click happened
      });
    });

    it('Renders Disabled Button', () => {
      const click = jest.fn();
      render(<Disabled onClick={click} />);
      const buttonEl = screen.getByRole('button');
      fireEvent.click(buttonEl);
      expect(click).not.toBeCalled(); // Click is not triggered for Disabled Button

      /** Snapshot Testing */
      const tree = renderer.create(<Disabled />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders Loading Button', () => {
      /** Snapshot Testing */
      const tree = renderer.create(<Loading />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders FullWidth Button', () => {
      const tree = renderer.create(<FullWidth />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    describe('Test Icon Button', () => {
      it('Renders IconButton Button', () => {
        const tree = renderer.create(<IconButton />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('Test Icon Only Button', () => {
      it('Run Snapshot Test', () => {
        const tree = renderer.create(<IconOnlyButton />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('Expects Icon to be Present', () => {
        render(<IconOnlyButton />);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl).toBeInTheDocument();
        const iconEl = screen.getByTestId('icon-external');
        expect(iconEl).toBeInTheDocument();
      });
    });

    describe('Test Upload Button (Single PDF)', () => {
      it('Renders Upload Button', () => {
        render(<Upload_button_for_single_PDF_upload />);
        const buttonEl = screen.getByRole('button');
        const inputFileEl = screen.getByTestId('button-upload');
        expect(buttonEl).toBeInTheDocument(); // Button
        expect(inputFileEl).toBeInTheDocument(); // <input type="file" /> Element is present
        expect(inputFileEl).toHaveAttribute('type', 'file'); // Input type File
        expect(inputFileEl).not.toBeVisible(); // exists but does not show in the Document
        expect(inputFileEl).not.toHaveAttribute('multiple'); // is not a multiple File Uploader
        /** Accept Files as per story */
        expect(inputFileEl).toHaveAttribute(
          'accept',
          Upload_button_for_single_PDF_upload.args?.uploadOptions?.accept
        );
      });
      it('Test Button click propagation to Hidden File Uploader', () => {
        render(<Upload_button_for_single_PDF_upload />);
        const buttonEl = screen.getByRole('button');
        const inputFileEl = screen.getByTestId('button-upload');
        /**Spy on the click event of hidden upload button */
        const spy = jest.spyOn(inputFileEl, 'click');
        /** Launch click on Visible Button */
        fireEvent.click(buttonEl);
        expect(spy).toHaveBeenCalledTimes(1); // Expect click to trigger on upload buton
      });
      it('Test Single File being uploaded', async () => {
        /** Create a Mock PDF file */
        const file = new File(['hello'], 'hello.pdf', {
          type: 'application/pdf'
        });
        /** Setup mock events */
        const setup = userEvent.setup();

        render(<Upload_button_for_single_PDF_upload />);
        const inputFileEl: HTMLInputElement =
          screen.getByTestId('button-upload'); // Get File Upload Hidden Button

        /** Upload Files */
        await setup.upload(inputFileEl, file);

        /** Match file uploaded */
        expect(inputFileEl.files?.[0]).toStrictEqual(file); // first item of files array matches
        expect(inputFileEl.files?.item(0)).toStrictEqual(file); // file match
        expect(inputFileEl.files).toHaveLength(1); // is a single file
      });
    });

    it('Renders Upload Button (Multiple Files)', () => {
      render(<Upload_Button_for_multiple_files />);
      const buttonEl = screen.getByRole('button');
      const inputFileEl = screen.getByTestId('button-upload');
      expect(buttonEl).toBeInTheDocument(); // Button
      expect(inputFileEl).toBeInTheDocument(); // <input type="file" /> Element is present
      expect(inputFileEl).toHaveAttribute('type', 'file'); // Input type File
      expect(inputFileEl).not.toBeVisible(); // exists but does not show in the Document
      expect(inputFileEl).toHaveAttribute('multiple'); // is not a multiple File Uploader
    });

    it('Renders Outline Button with External Link', () => {
      render(<Outline_Button_with_External_Link />);
      const buttonEl = screen.getByRole('button');
      expect(buttonEl).toBeInTheDocument(); // Button
      expect(buttonEl.nodeName.toLowerCase()).toMatch(/^a$/); // Match nodeName to anchor tag
      expect(buttonEl).toHaveAttribute(
        'href',
        Outline_Button_with_External_Link.args?.url
      ); // match url
      expect(buttonEl).toHaveTextContent(
        Outline_Button_with_External_Link.args?.children as string
      ); // match Button text
      if (Outline_Button_with_External_Link.args?.external) {
        expect(buttonEl).toHaveAttribute('target', '_blank'); // Match external Link with attr
      }
    });
  });
});
