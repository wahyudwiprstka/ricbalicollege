export const getUserLocale = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("locale");
  }
  return null;
};

export const setUserLocale = (value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("locale", value);
  }
};
