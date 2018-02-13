module.exports = {
  extends: ["airbnb", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-unused-prop-types": "off",
  },
  env: {
    jest: true,
    browser: true
  },
  plugins: ["react"],
};
