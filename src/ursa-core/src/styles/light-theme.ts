import { commonStyles } from "./common";

export const lightTheme = {
  color: {
    "--ursa-color-scheme": "light",
    "--ursa-bg-primary": "rgba(246, 246, 247, 1)",
    "--ursa-text-primary": "rgba(0, 0, 0, 1)",
    "--ursa-backdrop": "rgba(0, 0, 0, 0.5)",
    "--ursa-border-primary": "rgba(203, 213, 225, 1)",
    ...commonStyles.color,
  },
};
