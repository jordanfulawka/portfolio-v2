'use client';

import { createContext, useContext, useState } from 'react';

export const PerformanceContext = createContext({
  performanceMode: false,
  togglePerformanceMode: () => {},
});

function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [performanceMode, setPerformanceMode] = useState(false);

  function togglePerformanceMode() {
    setPerformanceMode((prev) => !prev);
  }

  return (
    <PerformanceContext.Provider
      value={{ performanceMode, togglePerformanceMode }}
    >
      {children}
    </PerformanceContext.Provider>
  );
}

function usePerformance() {
  return useContext(PerformanceContext);
}

export { PerformanceProvider, usePerformance };
