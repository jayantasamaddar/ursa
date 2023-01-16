type Falsy = string | number | boolean | null | typeof NaN | undefined;

export const normalizeBoolean = (value?: Falsy): boolean => {
  if (!Boolean(value) || value === 'false') {
    return false;
  } else return true;
};
