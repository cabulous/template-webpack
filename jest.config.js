const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/__mocks__/setEnvVars.js'],
  globals: {
    window: {},
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};

module.exports = config;
