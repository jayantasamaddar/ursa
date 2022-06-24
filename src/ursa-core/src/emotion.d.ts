import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      "--ursa-color-scheme": string;
      "--ursa-bg-primary": string;
      "--ursa-backdrop": string;
      "--ursa-text-primary": string;
      "--ursa-btn-primary": string;
      "--ursa-btn-primary-hovered": string;
      "--ursa-btn-basic": string;
      "--ursa-btn-alert": string;
      "--ursa-btn-alert-hovered": string;
      "--ursa-btn-disabled": string;
      "--ursa-link-primary": string;
      "--ursa-link-primary-hovered": string;
      "--ursa-border-primary": string;
      "--ursa-border-secondary": string;
      "--ursa-nav-bg-primary": string;
      "--ursa-nav-item-bg-active": string;
      "--ursa-nav-item-bg-hovered": string;
      "--ursa-tag-bg-basic": string;
      "--ursa-tag-text": string;
      "--ursa-tab-selected": string;
      "--ursa-card-img-bg": string;
      "--ursa-badge-img-bg": string;
      "--ursa-accent-color": string;
      "--ursa-accent-color-hovered": string;
      "--ursa-white": string;
      "--ursa-black": string;
    },
    font: {
      "--ursa-font-primary": string;
    },
    fontSize: {
      "--ursa-font-size-1": string;
      "--ursa-font-size-2": string;
      "--ursa-font-size-3": string;
      "--ursa-font-size-4": string;
      "--ursa-font-size-5": string;
      "--ursa-font-size-6": string;
      "--ursa-font-size-7": string;
      "--ursa-font-size-8": string;
      "--ursa-font-size-9": string;
      "--ursa-font-size-10": string;
      "--ursa-font-size-11": string;
      "--ursa-font-size-12": string;
      "--ursa-font-size-13": string;
    },
    border: {
      "--ursa-border-radius-lg": string;
      "--ursa-border-radius-xl": string;
      "--ursa-border-radius-2xl": string;
      "--ursa-border-radius-full": string;
    }
  }
}