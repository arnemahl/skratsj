import React from 'react';
import colors from './colors';

export default function DefaultTheme(props) {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: colors }} />
      {props.children}
    </div>
  )
}
