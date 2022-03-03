module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    "plugin:react/jsx-runtime",
    'google',
  ],
  "ignorePatterns": ["main.tsx"],
  'parser': '@typescript-eslint/parser',
  "parserOptions": { "project": ["./tsconfig.json"] },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "max-len": ["error", { "code": 140 }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always", { "singleValue": true }],
    "computed-property-spacing": ["error", "never", { "enforceForClassMembers": true }],
    "brace-style": ["error", "stroustrup"],
    "linebreak-style": ["warn"],
    "require-jsdoc": ["warn", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
      }
    }],
  },
};
