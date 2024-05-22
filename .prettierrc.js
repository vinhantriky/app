/** @type {import('@serverless-guru/prettier-plugin-import-order').PluginConfig} */
module.exports = {
  importOrder: [
    '^react(-native)?$', // React and react-native stuff goes at the top
    '', // use empty strings to separate groups with empty lines
    '<THIRD_PARTY_MODULES>', // Third party modules (this is a plugin keyword)
    '',
    '^#/types(.*)$',
    '',
    '^#/theme(.*)$',
    '',
    '^#/constants(.*)$',
    '',
    '^#/store(.*)$',
    '',
    '^#/hooks(.*)$',
    '',
    '^#/utils(.*)$',
    '',
    '^#/components(.*)$',
    '',
    '^#/(.*)$',
    '',
    '^../(.*)$', // Local imports in parent directories
    '^./(.*)$', // Local imports in current directory
    '',
    '^(.*)styles',
  ],
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
};
