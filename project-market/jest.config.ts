

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    
    "src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos en src
    "!src/**/*.d.ts",          // Excluye los archivos de declaración de TypeScript
    "!src/index.tsx",          // Excluye archivos de entrada principales si no son necesarios
  ],


  
  transformIgnorePatterns: [
    "/node_modules/(?!(module-to-transform)/)"
  ],
  setupFiles: ['<rootDir>/jest.setup.ts'],

};
