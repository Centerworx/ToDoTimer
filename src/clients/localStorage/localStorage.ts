import { INITIAL_STORAGE_STATE } from "./initial_storage_state";
import { LocalStorage } from "./type";

const isBrowser = (): boolean =>
  // eslint-disable-next-line no-implicit-coercion
  !!(typeof window !== "undefined" && window.localStorage);

export const KEY = "einstein";

export const setStorage = (storage: LocalStorage): boolean => {
  if (isBrowser()) {
    const stringStorage = JSON.stringify(storage);
    window.localStorage.setItem(KEY, stringStorage);
    return true;
  }
  return false;
};

export const getStorage = (): LocalStorage | null => {
  let storageState: LocalStorage | null = null;

  if (isBrowser()) {
    const storageJson = window.localStorage.getItem(KEY);
    console.log("storageJson: ", storageJson);
    if (storageJson) {
      console.log("JSON.parse(storageJson): ", JSON.parse(storageJson));
      storageState = JSON.parse(storageJson) as LocalStorage;
    }
  }

  return storageState;
};
