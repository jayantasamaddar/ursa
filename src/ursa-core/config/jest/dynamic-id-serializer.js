let counter = 0;
const ids = [
  'Ursa-Checkbox-',
  'Ursa-CheckboxLabel-',
  'Ursa-Form-',
  'Ursa-Heading-',
  'Ursa-Icon-',
  'Ursa-RadioButtonInput-',
  'Ursa-RadioButtonLabel-',
  'Ursa-RadioButtonHelpText-',
  'Ursa-Select-',
  'Ursa-SelectLabel-',
  'Ursa-SelectHelpText-',
  'Ursa-Textfield-',
  'Ursa-TextfieldLabel-',
  'Ursa-Tooltip-'
];
const regExp = new RegExp(`^(?:${ids.join('|')})`);

module.exports = {
  test: (val) => typeof val === 'string',
  print: (val) => {
    const match = val.match(regExp);
    if (match?.input === val) {
      const newVal = `"Ursa-${val.split('-')[1]}-${counter}"`;
      counter++;
      return newVal;
    }
    return val;
  }
};
