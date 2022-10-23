import { Option } from '../types';

export const getSelectedOption = (options: Option[], value: string) => {
  let selectedOption = options.find((option) => option.value === value);
  if (value === undefined) {
    selectedOption = options.find(
      (option) => !option.disabled && option.value !== ''
    );
  }
  return selectedOption || { label: '', value: '' };
};
