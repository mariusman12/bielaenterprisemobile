module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      function stripImportMetaEnv({ types: t }) {
        return {
          name: 'strip-import-meta-env',
          visitor: {
            MemberExpression(path) {
              const { object, property } = path.node;
              if (
                t.isMetaProperty(object) &&
                object.meta.name === 'import' &&
                object.property.name === 'meta' &&
                t.isIdentifier(property, { name: 'env' })
              ) {
                path.replaceWith(t.objectExpression([]));
              }
            },
          },
        };
      },
    ],
  };
};