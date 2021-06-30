module.exports = {
  "moduleNameMapper": {
    "^@app/(.*)$": "<rootDir>/src/main/$1",
    "^@test/(.*)$": "<rootDir>/src/test/$1"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/jest-setup.js"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
}
