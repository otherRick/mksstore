import type { Config } from 'jest';

const config: Config = {
  testEnvironmentOptions: {
    customExportConditions: ['']
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFiles: ['./jest.polyfills.js'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  coveragePathIgnorePatterns: [
    '/.storybook/',
    'src/vite-env.d.ts',
    '\\.stories.(js|jsx|ts|tsx)$',
    'src/mocks/',
    'src/routes/'
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg'
  }
};

export default config;
