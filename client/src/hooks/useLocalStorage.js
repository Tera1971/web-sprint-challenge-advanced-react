import { useState } from "react";
// set up state property
// capture the values
// if local data use that, else use initial data
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Is the item in local storage?
    if (window.localStorage.getItem(key)) {
      // if yes, intialize useState with it
      return JSON.parse(window.localStorage.getItem(key));
    }
    // otherwise, take our initial value and save it to localStorage
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  // extends the setter function in useState to also reflect changes in localStorage
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};