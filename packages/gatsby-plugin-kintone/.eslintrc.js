module.exports = {
    extends: "@cybozu/eslint-config/presets/node-typescript-prettier",
    "settings": {
      "node": {
        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#tryextensions
        "tryExtensions": [".js", ".json", ".node", ".ts"]
      }
  },
}