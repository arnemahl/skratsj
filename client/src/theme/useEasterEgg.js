import { useState, useCallback } from 'react';

export function useEasterEgg(enableEasterEgg) {
  const [easterEgg, setEasterEgg] = useState({
    t0: 0,
    clicks: 0,
  });

  return useCallback(() => {
    const { t0, clicks } = easterEgg;

    if (Date.now() - t0 > 1000) {
      setEasterEgg({
        t0: Date.now(),
        clicks: 1,
      });
    } else {
      setEasterEgg({
        t0,
        clicks: clicks + 1,
      })

      if (clicks + 1 === 3) {
        enableEasterEgg();
      }
    }
  }, [easterEgg, setEasterEgg])
}
