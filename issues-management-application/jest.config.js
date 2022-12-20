module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@themes/(.*)': '<rootDir>/src/themes/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@mockData/(.*)': '<rootDir>/src/mockData/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@stores/(.*)': '<rootDir>/src/stores/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@apis/(.*)': '<rootDir>/src/apis/$1',
    '@layout/(.*)': '<rootDir>/src/layout/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
  },
  transform: {
    '.+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
  modulePaths: ['node_modules', '<rootDir>/src', '/shared/vendor/modules'],
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
};
