const createClassStack = (classList) => (
  classList
    .map((className) => {
      if (Array.isArray(className)) {
        return createClassStack(className);
      }

      return className;
    })
    .filter((a) => a)
    .join(' ')
);

const alphabetizeObject = (obj) => {
  const sortedObject = {};

  Object.keys(obj).sort().forEach((key) => {
    sortedObject[key] = obj[key];
  });

  return sortedObject;
}

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

module.exports = {
	createClassStack,
  alphabetizeObject,
  callAll
};
