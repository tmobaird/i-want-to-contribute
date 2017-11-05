import { Base64 } from 'js-base64';

export const base64ToUTF8 = (str) => (
  Base64.decode(str)
);

export const utf8ToBase64 = (str) => (
  Base64.encode(str)
);
