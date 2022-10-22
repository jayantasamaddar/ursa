import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Form.story';

const { BasicForm } = composeStories(stories);

describe('components/Form', () => {
  describe('<BasicForm />', () => {
    it('Rendered in the DOM', () => {
      render(<BasicForm />);
      const formEl = screen.getByTestId('test-form');
      const firstname = screen.getByLabelText('First Name');
      const lastname = screen.getByLabelText('Last Name');
      const email = screen.getByLabelText('Email');
      const submit = screen.getByRole('button');

      /** Present in the DOM */
      expect(formEl).toBeInTheDocument();
      expect(firstname).toBeInTheDocument();
      expect(lastname).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(submit).toBeInTheDocument();
    });

    it('Run Snapshot Test', () => {
      const FormEl = renderer.create(<BasicForm />).toJSON();
      expect(FormEl).toMatchSnapshot();
    });

    it('Update Form data and Submit Form', () => {
      const dummyData = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@example.com'
      };
      const mockSubmit = jest.fn();
      render(<BasicForm onSubmit={mockSubmit} />);
      const firstname = screen.getByLabelText('First Name');
      const lastname = screen.getByLabelText('Last Name');
      const email = screen.getByLabelText('Email');

      /** Fire change events */
      fireEvent.change(firstname, { target: { value: dummyData.firstname } }); // Changed First Name
      fireEvent.change(lastname, { target: { value: dummyData.lastname } }); // Changed Last Name
      fireEvent.change(email, { target: { value: dummyData.email } }); // Changed Email

      /** Change Event updated input fields */
      expect(firstname).toHaveAttribute('value', dummyData.firstname);
      expect(lastname).toHaveAttribute('value', dummyData.lastname);
      expect(email).toHaveAttribute('value', dummyData.email);

      fireEvent.click(screen.getByRole('button')); // Click Submit Button
      expect(mockSubmit).toHaveBeenCalledTimes(1); // Expect submit function call once.
    });

    it('Test form autocomplete on/off', () => {
      render(<BasicForm />);
      const autoComplete = BasicForm.args?.autoComplete;
      const formEl = screen.getByTestId('test-form');
      expect(formEl).toHaveAttribute('name', BasicForm.args?.name); // name attribute matches
      expect(formEl).toHaveAttribute(
        'autocomplete',
        !autoComplete ? undefined : autoComplete === 'off' ? 'off' : 'on'
      ); // autocomplete attribute matches
    });
  });
});
