import React from 'react';

const css = `
  button {
    color: red !important;
  }
`;

export default function () {
  return (
    <style dangerouslySetInnerHTML={{ __html: css }} />
  );
}
