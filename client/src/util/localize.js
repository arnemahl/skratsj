export const norwegianDomain = window.location.hostname.split('.').slice(-1)[0] === 'no';

export const preferredLanguage = norwegianDomain ? 'norwegian' : 'english';
