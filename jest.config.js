export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1', // это сопоставляет "src" с корневой директорией
      },
  };