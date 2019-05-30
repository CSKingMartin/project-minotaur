export const atomsContext = require.context('@atoms/', true, /\.example\.mdx$/);
export const moleculesContext = require.context('@molecules/', true, /\.example\.mdx$/);
export const organismsContext = require.context('@organisms/', true, /\.example\.mdx$/);

const isRenderableModule = (key) => (
  key.indexOf('.mdx') !== -1 && // grab jsx files
  key.indexOf('.test.jsx') === -1 && // skip test files
  key.substr(0, 1) !== '_' // skip partial files
);

const requireAllComponents = (context, prefix) =>
  context.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      const name = key.substr(2).split('/')[0];
      modules[prefix + name] = context(key).default;
      return modules
          }, {});

const path2LinkList = (baseUrl = '') => (data) => {
  const normalPath = data.path.substr(
    0,
    data.path.lastIndexOf('.') !== -1
      ? data.path.lastIndexOf('.')
      : undefined
  );

  let nextPath = `${baseUrl}/${normalPath}`;
  nextPath = nextPath.substr(1, nextPath.length - 1);

  return {
    ...data,
    url: nextPath, // remove html on dev
    content:
      data.path
        .replace('.html', '')
        .split('/')
        .map((s) => s.substr(0, 1).toUpperCase() + s.substr(1))
        .join('\xa0') // &nbsp;
  };
};

export const atomsIndexData =
  Object.keys(requireAllComponents(atomsContext, '/styleguide/atoms/'))
    .map((p) => ({
      path: p.substr(p.indexOf('/atoms/') + '/atoms/'.length)
    }))
    .map(path2LinkList('/styleguide/atoms'));

export const moleculesIndexData =
  Object.keys(requireAllComponents(moleculesContext, '/styleguide/molecules/'))
    .map((p) => ({
      path: p.substr(p.indexOf('/molecules/') + '/molecules/'.length)
    }))
    .map(path2LinkList('/styleguide/molecules'));

export const organismsIndexData =
  Object.keys(requireAllComponents(organismsContext, '/styleguide/organisms/'))
    .map((p) => ({
      path: p.substr(p.indexOf('/organisms/') + '/organisms/'.length)
    }))
    .map(path2LinkList('/styleguide/organisms'));
