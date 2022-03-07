"use strict";

const defaults = require("./jest.config");

module.exports = {
  clearMocks: true,
  modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"],
  roots: ["<rootDir>/src"],
//   setupFiles: ["<rootDir>/jest/setupEnv.js"],
//   setupFilesAfterEnv: ["<rootDir>/jest/matchers.js"],
  testEnvironment: "node",
collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    // "!src/plugins/firestore.js", // Ignore coverage around plugin that connects to external GCP
    // "!src/app/payments/paymentOptionRules/configurationRules.js", // Ignore coverage for test specific file
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testMatch: ["<rootDir>/src/**/?(*.)test.js"],
};
