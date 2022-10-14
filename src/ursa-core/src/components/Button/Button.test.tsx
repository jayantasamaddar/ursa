import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { createSerializer } from '@emotion/jest';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import * as stories from './Button.story';
import { ThemeProvider } from '../ThemeProvider';
import { Button } from './Button';

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
    it('Renders Basic Button', () => {
      const tree = renderer.create(<Basic />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Renders Primary Button', () => {
      const tree = renderer.create(<Primary />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders Outline Button', () => {
      const tree = renderer.create(<Outline />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders Alert Button', () => {
      const tree = renderer.create(<Alert />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders Disabled Button', () => {
      const tree = renderer.create(<Disabled />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders Loading Button', () => {
      const tree = renderer.create(<Loading />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Renders FullWidth Button', () => {
      const tree = renderer.create(<FullWidth />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    // it('Renders IconButton Button', () => {
    //   const tree = renderer.create(<IconButton />).toJSON();
    //   expect(tree).toMatchSnapshot();
    // });

    // it('Renders IconOnlyButton Button', () => {
    //   const tree = renderer.create(<IconOnlyButton />).toJSON();
    //   expect(tree).toMatchSnapshot();
    // });

    it('Renders Upload Button (Single PDF)', () => {
      render(<Upload_button_for_single_PDF_upload />);
      const buttonEl = screen.getByRole('button');
      const inputFileEl = screen.getByTestId('button-upload');
      expect(buttonEl).toBeInTheDocument(); // Button
      expect(inputFileEl).toBeInTheDocument(); // <input type="file" /> Element is present
      expect(inputFileEl).toHaveAttribute('type', 'file'); // Input type File
      expect(inputFileEl).not.toBeVisible(); // exists but does not show in the Document
      expect(inputFileEl).not.toHaveAttribute('multiple'); // is not a multiple File Uploader
      expect(inputFileEl).toHaveAttribute(
        'accept',
        Upload_button_for_single_PDF_upload.args.uploadOptions.accept
      ); // Accept Files as per story
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
        Outline_Button_with_External_Link.args.url
      ); // match url
      expect(buttonEl).toHaveTextContent(
        Outline_Button_with_External_Link.args.children as string
      ); // match Button text
      if (Outline_Button_with_External_Link.args.external) {
        expect(buttonEl).toHaveAttribute('target', '_blank'); // Match external Link with attr
      }
    });
  });
});
