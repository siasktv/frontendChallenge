export const MOCK_DELAY = 500;
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
