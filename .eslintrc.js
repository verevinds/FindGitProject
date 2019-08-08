module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "comma-dangle": 0,
    "no-restricted-syntax": 1,
    "new-cap": 1,
    "no-continue": 1,
    "no-underscore-dangle": 1,
    "global-require": 1,
    "react/no-multi-comp": 1,
    "react/jsx-filename-extension": 0,
    "camelcase": 1,
    "import/no-unresolved": 1,
    "import/prefer-default-export": 1,
    "import/extensions": 1,
    "no-return-assign": 1,
    "max-len": 1,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0
  },
  "globals": {
    "document": false,
    "window": false,
    "HTMLInputElement": false,
    "HTMLDivElement": false
  },
  "env": {
    "jest": true
  }
}
