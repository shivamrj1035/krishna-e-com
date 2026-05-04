/**
 * Simple obfuscation utility to prevent direct access to image URLs.
 * In a production app, this would use a proper crypto library and server-side decryption.
 */

const SECRET_KEY = 'SHYAM_DIVINE_COLLECTIONS';

export const encryptImageUrl = (url) => {
  if (!url) return '';
  try {
    // Basic XOR + Base64 for obfuscation
    const encoded = btoa(url.split('').map((char, i) => 
      String.fromCharCode(char.charCodeAt(0) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length))
    ).join(''));
    return `/api/image?data=${encodeURIComponent(encoded)}`;
  } catch (e) {
    return url;
  }
};

export const decryptImageUrl = (encodedData) => {
  if (!encodedData) return '';
  try {
    const decoded = atob(decodeURIComponent(encodedData));
    return decoded.split('').map((char, i) => 
      String.fromCharCode(char.charCodeAt(0) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length))
    ).join('');
  } catch (e) {
    return '';
  }
};
