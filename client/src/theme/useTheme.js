import { useState, useCallback } from 'react';

export function useTheme(initialTheme = 'default') {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = useCallback(() => {
    // eslint-disable-next-line default-case
    switch (theme) {
      case 'default':
        setTheme('retro-wave');
        break;
      case 'retro-wave':
        setTheme('default');
        break;
    }
  }, [theme, setTheme]);

  return [theme, toggleTheme]
}
