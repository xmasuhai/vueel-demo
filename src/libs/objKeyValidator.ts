const objKeyValidator = (attriObj: mediaQuery, attriData: string[]): boolean => {
  let valid = true;
  const keys = Object.keys(attriObj);
  keys.forEach((key) => {
    if (!attriData.includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default objKeyValidator;
