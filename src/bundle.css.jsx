const requireAll = (context) => context.keys().map(context);
require('./static/reset.css');
require('./static/variables/index.css');
require('@atoms/MinotaurGlobal/MinotaurGlobal.css');


// require the rest of the components
requireAll(require.context('@atoms/', true, /\.css$/));
requireAll(require.context('@molecules/', true, /\.css$/));
requireAll(require.context('@organisms/', true, /\.css$/));
