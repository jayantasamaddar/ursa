import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Accordion.story';
import { itemsData } from './data.mock';
import { normalizeBoolean } from '../../utilities';

const { BasicAccordion } = composeStories(stories);

describe('components/Accordion', () => {
  beforeEach(() => render(<BasicAccordion />));
  describe('<BasicAccordion />', () => {
    it('Rendered in the DOM', () => {
      const accordionHeadersEl = screen.getAllByRole('button');
      expect(accordionHeadersEl.length).toStrictEqual(itemsData.length);
    });
    it('Accordion Header is linked to Accordion Panel', () => {
      const accordionHeadersEl = screen.getAllByRole('button');
      accordionHeadersEl.forEach((header) => {
        const buttonText = header.textContent;
        const accordionPanel = screen.getByLabelText(buttonText as string);
        expect(accordionPanel).toHaveAttribute('aria-labelledby', header.id);
        expect(accordionPanel.id).toStrictEqual(
          header.getAttribute('aria-controls')
        );
      });
    });
    it('Accordion Header when clicked toggles the display of the Accordion Panel', () => {
      const accordionHeadersEl = screen.getAllByRole('button');
      accordionHeadersEl.forEach((header) => {
        const buttonText = header.textContent;
        const accordionPanel = screen.getByLabelText(buttonText as string);
        const ariaExpanded = normalizeBoolean(
          header.getAttribute('aria-expanded')
        );
        expect(ariaExpanded).toBeFalsy(); // aria-expanded of the header: false
        expect(
          normalizeBoolean(accordionPanel.getAttribute('aria-hidden'))
        ).toBeTruthy(); // aria-hidden of the panel: true

        /** EXPAND */
        fireEvent.click(header);
        expect(normalizeBoolean(header.getAttribute('aria-expanded'))).toBe(
          !ariaExpanded
        ); // aria-expanded of the header: true
        expect(
          normalizeBoolean(accordionPanel.getAttribute('aria-hidden'))
        ).toBeFalsy(); // aria-hidden of the panel: false
        expect(accordionPanel).not.toHaveStyle({ display: 'none' }); // display is not 'none'

        /** SHRINK */
        fireEvent.click(header);
        expect(normalizeBoolean(header.getAttribute('aria-expanded'))).toBe(
          ariaExpanded
        ); // aria-expanded of the header: false
        expect(
          normalizeBoolean(accordionPanel.getAttribute('aria-hidden'))
        ).toBeTruthy(); // aria-hidden of the panel: true
        expect(accordionPanel).toHaveStyle({ display: 'none' }); // display is 'none'
      });
    });
  });
});
