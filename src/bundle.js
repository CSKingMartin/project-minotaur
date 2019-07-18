const cache = {};

const importAll = (r) => {
  r.keys().forEach(key => {
    cache[key] = r(key);
  });
}

importAll(require.context('@atoms/', true, /index\.jsx$/));
importAll(require.context('@molecules/', true, /index\.jsx$/));
importAll(require.context('@organisms/', true, /index\.jsx$/));

export default cache;