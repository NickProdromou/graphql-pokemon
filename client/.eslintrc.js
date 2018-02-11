module.exports = {
  extends: ["airbnb", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  },
  env: {
    jest: true,
    browser: true
  }
};
