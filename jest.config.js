module.exports = {
  globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' }
}
