// registry.js
const path = require('path');
const requireContext = require('require-context');

const catalogContext = requireContext('../../src/', true, /index\.jsx$/);
const examplesContext = requireContext('../../src/', true, /.example\.mdx$/);

const catalog = {};

const data = catalogContext.keys().map((key, index) => {
  const examples = examplesContext.keys();
  const category = key.substr(2).split('/')[0];
  const name = key.substr(2).split('/')[1];

  // const printFile = (file) => {
  //   const reader = new FileReader();
  //   reader.onload = (evt) => {
  //     console.log(evt.target.result);
  //   };
  //   reader.readAsText(file);
  // }

  // printFile(key);

  let bool;

  for (let i = 0; i < examples.length; i++) {
    const test = examples[i].substr(2).split('/')[1];
    if (name === test) {
      bool = true;
    }
  }

  const entry = {
    "name": name,
    "path": key,
    "category": category,
    "example": bool
  };

  return entry;
}).sort((first, second) => {
  if (first.name.toUpperCase() < second.name.toUpperCase()) {
    return -1;
  }
  if (first.name.toUpperCase() > second.name.toUpperCase()) {
    return 1;
  }
  return 0;
});

module.exports = {
  data
};

