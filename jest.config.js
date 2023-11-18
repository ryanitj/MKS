const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ["**/__tests__/**/*.spec.ts", "**/__tests__/**/*.spec.tsx"],

}

module.exports = createJestConfig(customJestConfig)