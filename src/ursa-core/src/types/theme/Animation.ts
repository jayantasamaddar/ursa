interface AnimationTiming {
  '--ursa-animation-timing-ease': string;
  '--ursa-animation-timing-slider': string;
  '--ursa-animation-timing-slidestop': string;
  '--ursa-animation-timing-throttle': string;
}

export interface Animation {
  timing: AnimationTiming;
}
