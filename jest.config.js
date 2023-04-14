module.exports = {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testRegex": "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ]
};
