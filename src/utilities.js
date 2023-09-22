const setCookie = (name, value, day) => {
  const date = new Date();
  date.setTime(date.getTime() + day * 365 * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};Path=/;${expires}; SameSite=Strict; Secure`;
};
const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
const deleteCookie = name => {
  setCookie(name, '', -1);
};

export { setCookie, getCookie, deleteCookie };
