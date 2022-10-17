let counter = 0;
module.exports = {
  test: (val) => typeof val === 'string',
  print: (val) => {
    const match = val.match(
      /^(?:Ursa-Icon-|Ursa-Textfield-|Ursa-TextfieldLabel-)/
    );
    if (match?.input === val) {
      const newVal = `"Ursa-${val.split('-')[1]}-${counter}"`;
      counter++;
      return newVal;
    }
    return val;
  }
};
