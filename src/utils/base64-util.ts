export const encodePreferencesBase64 = (value: string) => {
  return btoa(value);
};

export const decodePreferencesBase64 = (value: string) => {
  return atob(value);
};
