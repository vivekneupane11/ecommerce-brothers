export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Could not save to localStorage", err);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const savedState = localStorage.getItem(key);
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
  } catch (err) {
    console.error("Could not load from localStorage", err);
    return undefined;
  }
};
