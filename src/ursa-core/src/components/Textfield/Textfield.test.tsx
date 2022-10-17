import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Textfield.story';

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

const {
  DefaultTextfield,
  RequiredEmail_with_LabelHidden,
  Password_with_Errors,
  MultilineField,
  MonospacedFont,
  Disabled,
  ReadOnly,
  TextfieldSelectedOnFocus,
  TextfieldWithClearButton,
  NumberWithPrefix
} = composeStories(stories);

/***************************************************************************/
/** Run Tests */
/***************************************************************************/

describe('components/Textfield', () => {
  /***************************************************************************/
  /** Default Textfield */
  /***************************************************************************/

  describe('Default Textfield', () => {
    it('Snapshot Test', () => {
      const inputEl = renderer.create(<DefaultTextfield />).toJSON();
      expect(inputEl).toMatchSnapshot();
    });
  });

  describe('Required Email (Label Hidden)', () => {
    it('Render Input Email Field', () => {
      render(<RequiredEmail_with_LabelHidden />);
      const labelText = RequiredEmail_with_LabelHidden.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl.nodeName.toLowerCase()).toMatch(/^input$/); // Input element
      expect(inputEl).toHaveAttribute('type', 'email'); // type: Email
    });
  });

  /***************************************************************************/
  /** Password field with Errors */
  /***************************************************************************/

  describe('Password Field with Errors', () => {
    beforeEach(() => {
      render(<Password_with_Errors />);
    });
    it('Render Password Field with Errors', () => {
      const labelText = Password_with_Errors.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl).toHaveAttribute('type', 'password'); // type: Password
    });
    it('Click to show or hide password', () => {
      const labelText = Password_with_Errors.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      if (Password_with_Errors.args?.togglePasswordIcon) {
        const eyeIcon = screen
          .getByTestId('icon-external')
          .closest('.Ursa-Icon') as HTMLElement;
        /** Confirm that input field is a password field */
        expect(inputEl).toHaveAttribute('type', 'password');
        /** Simulate a click on the View Icon */
        fireEvent.click(eyeIcon);
        /** Password field changes to text field */
        expect(inputEl).toHaveAttribute('type', 'text');
        /** Simulate a click on the Hide Icon */
        fireEvent.click(eyeIcon);
        /** Text field changes to back to password field */
        expect(inputEl).toHaveAttribute('type', 'password');
      }
    });
    it('Errors are rendered in the DOM', () => {
      const errors = Password_with_Errors.args?.errors;
      if (errors?.length) {
        const labelText = Password_with_Errors.args?.label as string;
        const inputEl = screen.getByLabelText(labelText);
        const errorsID = `${inputEl.id}-errors`;
        const errorNodes = document.getElementById(errorsID)?.childNodes;
        errorNodes?.forEach((error, i) => {
          expect(error).toHaveTextContent(errors[i]);
        });
      }
    });
  });

  /***************************************************************************/
  /** Multiline Field */
  /***************************************************************************/

  describe('Multiline Field', () => {
    it('Render Multiline TextArea Field', () => {
      render(<MultilineField />);
      const labelText = MultilineField.args?.label as string;
      const textAreaEl = screen.getByLabelText(labelText);
      expect(textAreaEl).toBeInTheDocument(); // Loads element into DOM
      expect(textAreaEl.nodeName.toLowerCase()).toMatch(/^textarea$/); // Element loaded is textarea
    });
  });

  /***************************************************************************/
  /** Monospaced Font Textfield */
  /***************************************************************************/

  describe('Monospaced Font Textfield', () => {
    it('Renders Textfield with monospaced font', () => {
      render(<MonospacedFont />);
      const labelText = MonospacedFont.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl).toHaveStyle({ 'font-family': 'monospace' }); // Monospaced Font Textfield
    });
  });

  /***************************************************************************/
  /** Read-only Textfield */
  /***************************************************************************/

  describe('Read-Only Textfield', () => {
    it('Renders Textfield with readonly attribute', () => {
      render(<ReadOnly />);
      const labelText = ReadOnly.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl).toHaveAttribute('readonly'); // ReadOnly Textfield
    });
  });

  /***************************************************************************/
  /** Disabled Textfield */
  /***************************************************************************/

  describe('Disabled Textfield', () => {
    it('Renders Textfield with disabled attribute', () => {
      render(<Disabled />);
      const labelText = Disabled.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl).toHaveAttribute('disabled'); // Disabled Textfield
    });
  });

  /***************************************************************************/
  /** Text Field selected on Focus */
  /***************************************************************************/

  describe('Textfield selected on Focus', () => {
    it('Renders Textfield selected on Focus', () => {
      render(<TextfieldSelectedOnFocus />);
      const labelText = TextfieldSelectedOnFocus.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl.nodeName.toLowerCase()).toMatch(/^input$/); // Input element
    });
    it('On focus, Select the Textfield value', () => {
      render(<TextfieldSelectedOnFocus />);
      const labelText = TextfieldSelectedOnFocus.args?.label as string;
      const inputEl = screen.getByLabelText(labelText) as HTMLInputElement;
      const inputVal = TextfieldSelectedOnFocus.args?.value; // The input value
      /** Get selection before focus event */
      const beforeFocusSelection = inputVal?.slice(
        inputEl.selectionStart ?? 0,
        inputEl.selectionEnd ?? 0
      );
      expect(beforeFocusSelection).not.toBe(inputVal); // Compare to input value: Not selected
      /** Fire an focus event */
      act(() => {
        fireEvent.focus(inputEl);
      });
      expect(inputEl).toHaveFocus(); // Expect focus event to work
      /** Get selection after focus event */
      const afterFocusSelection = inputVal?.slice(
        inputEl.selectionStart ?? 0,
        inputEl.selectionEnd ?? 0
      );
      expect(afterFocusSelection).toBe(inputVal); // Compare to input value: Selected
    });
    it('When blurred, deselect', () => {
      const blurEvent = jest.fn();
      render(<TextfieldSelectedOnFocus onBlur={blurEvent} />);
      const labelText = TextfieldSelectedOnFocus.args?.label as string;
      const inputEl = screen.getByLabelText(labelText) as HTMLInputElement;
      const inputVal = TextfieldSelectedOnFocus.args?.value; // The input value
      /** Fire an focus event */
      act(() => {
        inputEl.focus(); // Alternative: fireEvent.focus(inputEl);
      });
      const afterFocusSelection = inputVal?.slice(
        inputEl.selectionStart ?? 0,
        inputEl.selectionEnd ?? 0
      );
      expect(afterFocusSelection).toBe(inputVal); // Compare to input value: Selected
      //   console.log({ afterFocusSelection });
      /** Fire a blur event */
      act(() => {
        inputEl.blur(); // Alternative: fireEvent.blur(inputEl);
      });
      expect(inputEl).not.toHaveFocus(); // Confirm that blur happened
      expect(blurEvent).toHaveBeenCalledTimes(1); // Blur event called

      //   const afterBlurSelection = inputVal.slice(
      //     inputEl.selectionStart,
      //     inputEl.selectionEnd
      //   );
      //   expect(afterBlurSelection).not.toBe(inputVal); // Compare to input value: Not selected
    });
  });

  /***************************************************************************/
  /** Text Field with Clear Button */
  /***************************************************************************/

  describe('Textfield with ClearButton', () => {
    it('Renders Textfield with Clear Button', () => {
      render(<TextfieldWithClearButton />);
      const labelText = TextfieldWithClearButton.args?.label as string;
      const inputEl = screen.getByLabelText(labelText);
      expect(inputEl).toBeInTheDocument(); // Loads element into DOM
      expect(inputEl.nodeName.toLowerCase()).toMatch(/^input$/); // Input element
    });
    it('Renders the Clear Button when there is Text', () => {
      const dummyText = 'John Doe';
      render(<TextfieldWithClearButton value={dummyText} />);
      const inputEl = screen.getByDisplayValue(dummyText); // Main input element
      const clearIcon = screen.getByTestId('icon-external'); // Icon element
      expect(clearIcon).toBeInTheDocument(); // Icon shows up
      expect(inputEl.nextSibling).toBe(clearIcon.closest('.Ursa-Icon')); // Elements are siblings
    });
    it('Does not render the Clear Button when there is no Text', async () => {
      let dummyText = 'John Doe';
      render(<TextfieldWithClearButton value={dummyText} />);
      const inputEl = await screen.findByDisplayValue(dummyText); // Main input element
      const clearIcon = await screen.findByTestId('icon-external'); // Get the icon that shows up
      /** Fire an onChange event that makes the value '' */
      fireEvent.change(inputEl, { target: { value: '' } });
      await waitFor(() => {
        /** Check that input element has no value */
        expect(inputEl).toHaveValue('');
        expect(clearIcon).not.toBeInTheDocument(); // Clear Icon does not show up in the document
      });
    });
    it('Clicking the clear Button clears the value and focusses on the input element', async () => {
      const dummyText = 'John Doe';
      render(<TextfieldWithClearButton value={dummyText} />);
      const inputEl = await screen.findByDisplayValue(dummyText); // Main input element
      const clearIcon = await screen.findByTestId('icon-external'); // Get the icon that shows up
      /** Fire an onChange event that makes the value '' */
      fireEvent.click(clearIcon.closest('.Ursa-Icon') as HTMLElement);
      await waitFor(() => {
        expect(inputEl).toHaveValue(''); // Input Element has no value
        expect(clearIcon).not.toBeInTheDocument(); // Clear Icon does not show up in the document
      });
    });
  });
});
