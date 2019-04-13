import React from 'react';
import { useTheme } from './useTheme';
import { useEasterEgg } from './useEasterEgg';
import Default from 'theme/Default/Default';
import RetroWave from 'theme/RetroWave/RetroWave';

function ThemeRenderer({ theme, children }) {
  // eslint-disable-next-line default-case
  switch (theme) {
    case 'default':
      return <Default>{children}</Default>;
    case 'retro-wave':
      return <RetroWave>{children}</RetroWave>;
  }
}

export default function ThemeToggler({ children }) {
  const [theme, toggleTheme] = useTheme('default');
  const onClick = useEasterEgg(toggleTheme);

  return (
    <div onClick={onClick}>
      <ThemeRenderer theme={theme}>
        {children}
      </ThemeRenderer>
    </div>
  );
}
