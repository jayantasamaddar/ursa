import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { ProgressBar, useCountdown } from '.';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

const CountdownTemplate: ComponentStory<typeof ProgressBar> = (args) => {
  const { countdown } = useCountdown();
  return <ProgressBar progress={countdown} preset="countdown" {...args} />;
};

export const DefaultProgressBar: ComponentStoryFn<typeof ProgressBar> =
  Template.bind({});
DefaultProgressBar.args = {
  progress: 40
};

export const SmallProgressBar: ComponentStoryFn<typeof ProgressBar> =
  Template.bind({});
SmallProgressBar.args = {
  progress: 40,
  size: 'small'
};

export const RoundedProgressBar: ComponentStoryFn<typeof ProgressBar> =
  Template.bind({});
RoundedProgressBar.args = {
  progress: 40,
  rounded: true
};

export const Countdown: ComponentStoryFn<typeof ProgressBar> =
  CountdownTemplate.bind({});
Countdown.args = {
  size: 'small'
};
