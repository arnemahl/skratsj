import React from 'react';
import * as S from './LanguageSelector.style.js';

const norwegianDomain = window.location.hostname.split('.').slice(-1)[0] === 'no';

export default class LanguageSelector extends React.Component {

  render() {
    return (
      <S.Container>
        <S.A href="https://skratsj.com">
          <S.Img
            src={require('./FlagUK.svg')}
            alt="United Kingdom flag"
            active={!norwegianDomain}
            style={{width: '26px', height: 'auto'}}
          />
        </S.A>
        <S.A href="https://skrætsj.no">
          <S.Img
            src={require('./FlagNorway.svg')}
            alt="Norwegian flag"
            active={norwegianDomain}
            style={{width: '22px', height: 'auto'}}
          />
        </S.A>
        </S.Container>
    );
  }
}
