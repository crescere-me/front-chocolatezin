const KEY_TOKEN = '@chocolate-front/token';

export function localStorageSetItem(token) {
  localStorage.setItem(KEY_TOKEN, token);
}

export function localStorageGetItem() {
  return localStorage.getItem(KEY_TOKEN);
}

export function localStorageRemoveItem() {
  localStorage.removeItem(KEY_TOKEN);
}
