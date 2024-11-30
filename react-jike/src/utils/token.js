/**
 * 存token
 */
const TOKENKEY = 'tokenKey'
export const setToken = (token) => {
  localStorage.setItem(TOKENKEY, token);
};

/**
 * 取token
 */
export const getToken = () => {
  return localStorage.getItem(TOKENKEY);
};

/**
 * 存token
 */
export const removeToken = () => {
  localStorage.removeItem(TOKENKEY);
};
