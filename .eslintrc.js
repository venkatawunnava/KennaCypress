module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:cypress/recommended"
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    "semi": 0,
    "curly": [2, "multi-line"],
    "default-case": 0,
    "indent": [1, 2, { SwitchCase: 1 }],
    "key-spacing": [2, { beforeColon: false, afterColon: true, mode: "minimum" }],
    "max-len": [0, 120, 2, { ignoreComments: true }],
    "new-cap": 1,
    "no-cond-assign": [2, "except-parens"],
    "no-else-return": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-param-reassign": 0,
    "no-tabs": 2,
    "no-unused-vars": [1, { vars: "local", args: "none" }],
    "quote-props": [2, "consistent-as-needed", { keywords: true }],
    "quotes": 0,
    "radix": 0,
    "space-infix-ops": 0,
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error"
  }
}
