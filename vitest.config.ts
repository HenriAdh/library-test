import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    fileParallelism: false,
    setupFiles: ["vitest/vitest.setup.ts"],
    globalSetup: ["vitest/vitest.global.setup.ts"],
    include: ["src/**/*.{spec,test}.ts"],
    testTimeout: 10000,
    coverage: {
      reportsDirectory: "./coverage",
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: [
        "**/*.test.ts",
        "**/*.spec.ts",
        "**/*.d.ts",
        "**/*.type.ts",
        "**/*.types.ts",
        "**/*.contract.ts",
        "**/*.protocol.ts",
        "**/*.interface.ts",
        "**/*.mock.ts",
        "**/*.mocks.ts",
        "**/mocks/**",
        "**/__mocks__/**",
        "**/__tests__/**",
        "**/__test-utils__/**",
        "**/*.test-util.ts",
      ],
    },
  },
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
});
