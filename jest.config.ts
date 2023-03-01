import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/', './__tests__/Unit/Exercicios/datas.ts']
};
export default config;
