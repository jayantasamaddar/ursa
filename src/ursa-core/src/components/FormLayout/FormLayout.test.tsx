import React from 'react';
import renderer from 'react-test-renderer';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FormLayout.story';

const { BasicFormLayout, GroupedFormLayout, CondensedFormLayout } =
  composeStories(stories);

describe('components/FormLayout', () => {
  describe('<BasicFormLayout />', () => {
    it('Run Snapshot Test', () => {
      const FormLayoutEl = renderer.create(<BasicFormLayout />).toJSON();
      expect(FormLayoutEl).toMatchSnapshot();
    });
  });
  describe('<GroupedFormLayout />', () => {
    it('Run Snapshot Test', () => {
      const FormLayoutEl = renderer.create(<GroupedFormLayout />).toJSON();
      expect(FormLayoutEl).toMatchSnapshot();
    });
  });
  describe('<CondensedFormLayout />', () => {
    it('Run Snapshot Test', () => {
      const FormLayoutEl = renderer.create(<CondensedFormLayout />).toJSON();
      expect(FormLayoutEl).toMatchSnapshot();
    });
  });
});
