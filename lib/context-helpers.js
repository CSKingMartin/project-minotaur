export const atomsContext = require.context('@atoms', true, /^(?!.*\.test\.mdx$).*\.(mdx|md)$/);
export const moleculesContext = require.context('@molecules', true, /^(?!.*\.test\.mdx$).*\.(mdx|md)$/);
export const organismsContext = require.context('@organisms', true, /^(?!.*\.test\.mdx$).*\.(mdx|md)$/);
export const templatesContext = require.context('@templates', true, /^(?!.*\.test\.mdx$).*\.(mdx|md)$/);