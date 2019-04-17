import React from 'react';
import * as S from './RetroWave.style.js';
import fonts from './fonts';
import colors from './colors';

export default function RetroWaveTheme(props) {
  return (
    <S.RetroWave>
      <style dangerouslySetInnerHTML={{ __html: fonts + colors }} />
      {props.children}
    </S.RetroWave>
  )
}
