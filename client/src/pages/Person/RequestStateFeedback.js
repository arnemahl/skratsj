import React from 'react';
import { LoadingMessage, ErrorMessage } from './Person.style.js';
import { preferredLanguage } from 'util/localize';

export const LoadingMessageLocalized = {
  english: () => (
    <LoadingMessage>
      Loading...
    </LoadingMessage>
  ),
  norwegian: () => (
    <LoadingMessage>
      Laster...
    </LoadingMessage>
  ),
}[preferredLanguage];

export const ErrorMessageLocalized = {
  english: () => (
    <ErrorMessage>
      Something went wrong.<br />
      Try <a href="/">reloading</a> the page.
    </ErrorMessage>
  ),
  norwegian: () => (
    <ErrorMessage>
      Noe gikk galt.<br />
      Prøv å <a href="/">laste siden</a> på nytt.
    </ErrorMessage>
  ),
}[preferredLanguage];
