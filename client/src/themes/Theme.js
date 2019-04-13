import React from 'react';
import RetroWave from 'themes/RetroWave/RetroWave';

export default function Theme({ theme = 'default' }) {
  // eslint-disable-next-line default-case
  switch (theme) {
    case 'default':
      return false;
    case 'retro-wave':
      return <RetroWave />
  }
}