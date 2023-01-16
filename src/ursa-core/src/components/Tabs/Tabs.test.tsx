import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tabs.story';

const { DefaultTabs, VerticalTabs } = composeStories(stories);

describe('components/Tabs', () => {
  describe('<DefaultTabs />', () => {
    beforeEach(() => render(<DefaultTabs />));
    it('Rendered in the DOM', () => {
      const tabListEl = screen.getByRole('tablist'); // The Tablist
      const tabsEl = screen.getAllByRole('tab'); // all Tabs
      const tabPanelsEl = screen.getAllByRole('tabpanel'); // all Tab Panels
      const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab
      const controlledTabPanel = tabPanelsEl.find(
        (panel) =>
          panel.getAttribute('id') === selectedTab.getAttribute('aria-controls')
      ); // Panel associated with selected Tab
      expect(tabListEl).toBeInTheDocument();
      expect(tabListEl.hasChildNodes()).toBe(true);
      expect(selectedTab).toHaveAttribute('aria-selected', 'true');
      expect(controlledTabPanel).toBeInTheDocument();

      /** Validate Tab Panel */
      tabsEl.forEach((tab, index) => {
        expect(tab).toBeInTheDocument(); // tab is in the document
        expect(tabListEl).toContainElement(tab); // tab is part of the tablist
        index === 0
          ? expect(selectedTab).toBe(tab) // The first tab is selected
          : expect(selectedTab).not.toBe(tab); // Other tabs are not selected
      });
      /** Validate Tab Panel */
      tabPanelsEl.forEach((tabPanel) => {
        expect(tabPanel).toBeInTheDocument(); // tab panel is in the document
        if (tabPanel.getAttribute('aria-labelledby') === selectedTab.id) {
          expect(tabPanel).not.toHaveStyle({ display: 'none' });
        } else {
          expect(tabPanel).toHaveStyle({ display: 'none' });
        }
      });
    });
    it('Clicking Tabs change Tab Content', () => {
      const tabsEl = screen.getAllByRole('tab'); // all Tabs
      const tabPanelsEl = screen.getAllByRole('tabpanel'); // all Tab Panels

      /** Clicking Tabs to change content */
      tabsEl.forEach((tab) => {
        fireEvent.click(tab);
        for (const tabPanel of tabPanelsEl) {
          if (tabPanel.getAttribute('aria-labelledby') === tab.id) {
            expect(tabPanel).not.toHaveStyle({ display: 'none' });
          } else {
            expect(tabPanel).toHaveStyle({ display: 'none' });
          }
        }
      });
    });
    it('Keyboard Accessibility works', () => {
      const tabsEl = screen.getAllByRole('tab'); // all Tabs
      /** Arrow Right */
      for (let i = 0; i < tabsEl.length; i++) {
        const currTab = screen.getByRole('tab', { selected: true }); // starting selected Tab
        const currIndex = tabsEl.findIndex((tab) => tab === currTab);
        fireEvent.keyUp(currTab, { key: 'ArrowRight' });
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        currIndex === tabsEl.length - 1
          ? expect(selectedTab).toBe(tabsEl[0])
          : expect(selectedTab).toBe(tabsEl[currIndex + 1]);
      }
      /** Arrow Left */
      for (let i = 0; i < tabsEl.length; i++) {
        const currTab = screen.getByRole('tab', { selected: true }); // starting selected Tab
        const currIndex = tabsEl.findIndex((tab) => tab === currTab);
        fireEvent.keyUp(currTab, { key: 'ArrowLeft' });
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        currIndex === 0
          ? expect(selectedTab).toBe(tabsEl[tabsEl.length - 1])
          : expect(selectedTab).toBe(tabsEl[currIndex - 1]);
      }
      /** Home */
      for (let i = 0; i < tabsEl.length; i++) {
        fireEvent.click(tabsEl[i]); // Select Tab
        fireEvent.keyUp(tabsEl[i], { key: 'Home' }); // KeyUp: Home Button
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        expect(selectedTab).toBe(tabsEl[0]);
      }
      /** End */
      for (let i = 0; i < tabsEl.length; i++) {
        fireEvent.click(tabsEl[i]); // Select Tab
        fireEvent.keyUp(tabsEl[i], { key: 'End' }); // KeyUp: Home Button
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        expect(selectedTab).toBe(tabsEl[tabsEl.length - 1]);
      }
    });
    it("Other Buttons don't work", () => {
      const currTab = screen.getByRole('tab', { selected: true }); // selected Tab
      const keys = ['ArrowUp', 'ArrowDown', 'Space'];
      keys.forEach((key) => {
        fireEvent.keyUp(currTab, { key });
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab
        expect(selectedTab).toBe(currTab);
      });
    });
  });

  describe('<Vertical Tabs>', () => {
    beforeEach(() => render(<VerticalTabs />));
    it('Rendered in the DOM', () => {
      const tabListEl = screen.getByRole('tablist'); // The Tablist
      expect(tabListEl).toBeInTheDocument();
      expect(tabListEl.hasChildNodes()).toBe(true);
    });
    it('Keyboard Accessibility works', () => {
      const tabsEl = screen.getAllByRole('tab'); // all Tabs
      /** Arrow Down */
      for (let i = 0; i < tabsEl.length; i++) {
        const currTab = screen.getByRole('tab', { selected: true }); // starting selected Tab
        const currIndex = tabsEl.findIndex((tab) => tab === currTab);
        fireEvent.keyUp(currTab, { key: 'ArrowDown' });
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        currIndex === tabsEl.length - 1
          ? expect(selectedTab).toBe(tabsEl[0])
          : expect(selectedTab).toBe(tabsEl[currIndex + 1]);
      }
      /** Arrow Up */
      for (let i = 0; i < tabsEl.length; i++) {
        const currTab = screen.getByRole('tab', { selected: true }); // starting selected Tab
        const currIndex = tabsEl.findIndex((tab) => tab === currTab);
        fireEvent.keyUp(currTab, { key: 'ArrowUp' });
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        currIndex === 0
          ? expect(selectedTab).toBe(tabsEl[tabsEl.length - 1])
          : expect(selectedTab).toBe(tabsEl[currIndex - 1]);
      }
      /** Home */
      for (let i = 0; i < tabsEl.length; i++) {
        fireEvent.click(tabsEl[i]); // Select Tab
        fireEvent.keyUp(tabsEl[i], { key: 'Home' }); // KeyUp: Home Button
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        expect(selectedTab).toBe(tabsEl[0]);
      }
      /** End */
      for (let i = 0; i < tabsEl.length; i++) {
        fireEvent.click(tabsEl[i]); // Select Tab
        fireEvent.keyUp(tabsEl[i], { key: 'End' }); // KeyUp: Home Button
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab after key
        expect(selectedTab).toBe(tabsEl[tabsEl.length - 1]);
      }
    });
    it("Other Buttons don't work", () => {
      const currTab = screen.getByRole('tab', { selected: true }); // selected Tab
      const keys = ['ArrowLeft', 'ArrowRight', 'Space'];
      keys.forEach((key) => {
        fireEvent.keyUp(currTab, { key });
        const selectedTab = screen.getByRole('tab', { selected: true }); // selected Tab
        expect(selectedTab).toBe(currTab);
      });
    });
  });
});
