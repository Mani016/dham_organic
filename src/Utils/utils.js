import Alert from './Alert';

export const setItemToSessionStore = (key, payload, store = localStorage) =>
  store.setItem(key, JSON.stringify(payload));

export const getItemFromSessionStore = (
  key,
  defaultValue,
  store = localStorage
) => JSON.parse(store.getItem(key)) || defaultValue;

export default function isImage(file) {
  const fileName = file.name || file.path;
  const suffix = fileName.substr(fileName.indexOf('.') + 1).toLowerCase();
  if (
    suffix === 'jpg' ||
    suffix === 'jpeg' ||
    suffix === 'bmp' ||
    suffix === 'png'
  ) {
    return true;
  }
  return false;
}
export const HANDLE_ERROR = (message, setLoading) => {
  Alert.showToastAlert('error', message);
  setLoading(false);
};
