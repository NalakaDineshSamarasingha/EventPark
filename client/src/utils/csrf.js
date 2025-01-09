// utils/csrf.js
export const getCSRFToken = () => {
    const name = 'csrftoken=';
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split('; ');
    for (let cookie of cookies) {
      if (cookie.startsWith(name)) {
        return cookie.substring(name.length);
      }
    }
    return null;
  };
  