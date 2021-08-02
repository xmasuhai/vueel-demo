const objKeyValidator = (attributeObj: mediaQuery, attributeData: string[]): boolean => {
  let valid = true;
  const keys = Object.keys(attributeObj);
  keys.forEach((key) => {
    if (!attributeData.includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default objKeyValidator;
