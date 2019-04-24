require('./static/reset.css');

const requireAll = (context) => context.keys().map(context);

// require the rest of the components
requireAll(require.context('@atoms/', true, /\.css$/));
requireAll(require.context('@molecules/', true, /\.css$/));
requireAll(require.context('@organisms/', true, /\.css$/));
