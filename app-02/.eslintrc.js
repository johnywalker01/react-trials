module.exports = {
  'env': {
    'browser': true,
    'es2016': true,
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
    "array-bracket-spacing": ["error", "always", { "singleValue": true }],
    "brace-style": ["error", "stroustrup"],
    "computed-property-spacing": ["error", "never", { "enforceForClassMembers": true }],
    "linebreak-style": ["warn"],
    "max-len": ["error", { "code": 140 }],
    "object-curly-spacing": ["error", "always"],
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
