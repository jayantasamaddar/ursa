import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Select.story';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

const {
  DefaultSelect,
  SelectWithLabelHidden,
  SelectWithPlaceholderAndHelpText,
  DisabledSelect,
  RequiredSelectWithPlaceholder
} = composeStories(stories);

describe('components/Select', () => {
  describe('<DefaultSelect />', () => {
    it('Snapshot Test', () => {
      const tree = renderer.create(<DefaultSelect />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Test onChange event', () => {
      const mockFn = jest.fn();
      render(<DefaultSelect onChange={mockFn} />);
      const options = DefaultSelect.args?.options;
      const selectEl = screen.getByLabelText(
        DefaultSelect.args?.label as string
      ) as HTMLSelectElement;

      if (options) {
        expect(selectEl.value).toBe(options[0].value); // Default option
      }
      /** Trigger Change Event */
      fireEvent.change(selectEl, { target: { value: 'cod' } });
      expect(selectEl.value).toBe('cod'); // Value changed
    });
  });

  describe('<SelectWithLabelHidden />', () => {
    it('Rendered in the DOM', () => {
      render(<SelectWithLabelHidden />);
      const label = screen.getByText(
        SelectWithLabelHidden.args?.label as string
      );
      expect(label).not.toBeVisible();
    });
  });

  describe('<SelectWithPlaceholderAndHelpText />', () => {
    it('Rendered in the DOM', () => {
      render(<SelectWithPlaceholderAndHelpText />);
      const selectEl = screen.getByLabelText(
        SelectWithPlaceholderAndHelpText.args?.label as string
      );
      expect(selectEl).toBeVisible();
    });
    it('Placeholder default text rendered when placeholder prop is true (boolean)', () => {
      render(<SelectWithPlaceholderAndHelpText />);
      const selectEl = screen.getByLabelText(
        SelectWithPlaceholderAndHelpText.args?.label as string
      );
      expect(selectEl).toHaveDisplayValue('--Select--');
    });
    it('Placeholder text rendered as given (string)', () => {
      const placeholder = 'DummyText';
      render(<SelectWithPlaceholderAndHelpText placeholder={placeholder} />);
      const selectEl = screen.getByLabelText(
        SelectWithPlaceholderAndHelpText.args?.label as string
      );
      expect(selectEl).toHaveDisplayValue(placeholder);
    });
    it('Help Text rendered', () => {
      render(<SelectWithPlaceholderAndHelpText />);
      const helpTextEl = screen.getByText(
        SelectWithPlaceholderAndHelpText.args?.helpText as string
      );
      expect(helpTextEl).toBeInTheDocument();
    });
  });

  describe('<DisabledSelect />', () => {
    it('Rendered with disabled attribute', () => {
      render(<DisabledSelect />);
      const selectEl = screen.getByLabelText(
        String(DisabledSelect.args?.label)
      );
      expect(selectEl).toBeInTheDocument();
      expect(selectEl).toHaveAttribute('disabled');
    });
  });

  describe('<RequiredSelectWithPlaceholder />', () => {
    it('Rendered in the DOM', () => {
      render(<RequiredSelectWithPlaceholder />);
      const selectEl = screen.getByLabelText(
        String(RequiredSelectWithPlaceholder.args?.label)
      );
      expect(selectEl).toBeInTheDocument();
    });
    it('Placeholder shows up by default', () => {
      render(<RequiredSelectWithPlaceholder />);
      const selectEl = screen.getByLabelText(
        String(RequiredSelectWithPlaceholder.args?.label)
      ) as HTMLSelectElement;
      expect(selectEl.value).toBe(''); // By default shows placeholder text which has '' value

      fireEvent.change(selectEl, { target: { value: 'prepaid' } });
      expect(selectEl.value).toBe('prepaid'); // Confirm if Change Event worked.

      /** Placeholder shouldn't be available */
      fireEvent.change(selectEl, { target: { value: '' } }); // Attempting to change to placeholder
      expect(selectEl.value).not.toBe('');
    });
  });
});
