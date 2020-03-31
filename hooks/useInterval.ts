import { useEffect } from 'react';

export function useInterval(onInterval: () => void, ms: number) {
  useEffect(() => {
    const interval = setInterval(onInterval, ms);
    return function cleanup() {
      clearInterval(interval);
    };
  });
}
